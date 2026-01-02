import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Download, Sparkles, Loader2 } from "lucide-react";
import { useAppUpdate } from "@/hooks/useAppUpdate";
import logo from "@/assets/dark-xxxhdpi.png";
import { Link } from "react-router-dom";

interface DownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DownloadModal = ({ open, onOpenChange }: DownloadModalProps) => {
  const { data, loading, error } = useAppUpdate();

  const handleDownload = () => {
    if (data?.apk_url) {
      window.open(data.apk_url, "_blank");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Snappie Logo" className="w-12 h-12 rounded-xl shadow-lg" />
              <div>
                <DialogTitle className="text-xl">Snappie</DialogTitle>
                {data && (
                  <p className="text-sm text-muted-foreground">
                    Versi {data.version_name}
                  </p>
                )}
              </div>
            </div>
          </div>
          <DialogDescription className="text-left">
            Download aplikasi Snappie untuk Android dan mulai jelajahi hidden gems kuliner di kotamu!
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              <p>Gagal memuat informasi update</p>
              <p className="text-sm text-muted-foreground mt-1">{error}</p>
            </div>
          ) : data ? (
            <div className="space-y-4">
              {/* Changelogs Header */}
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <h3 className="font-semibold text-foreground">Yang Baru</h3>
              </div>
              
              {/* Changelogs Content */}
              <div 
                className="bg-muted/50 rounded-xl p-4 prose prose-sm max-w-none
                  [&_ul]:list-none [&_ul]:p-0 [&_ul]:m-0 [&_ul]:space-y-3
                  [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:p-0
                  [&_li]:before:content-['✓'] [&_li]:before:text-primary [&_li]:before:font-bold [&_li]:before:text-lg
                  [&_strong]:text-foreground [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: data.changelogs }}
              />
            </div>
          ) : null}
        </div>

        {/* Terms & Privacy Notice */}
        <div className="px-1 pb-2">
          <p className="text-xs text-center text-muted-foreground">
            Dengan mengunduh aplikasi ini, Anda setuju dengan{" "}
            <Link 
              to="/syarat-ketentuan" 
              className="text-primary hover:underline font-medium"
              onClick={() => onOpenChange(false)}
            >
              Syarat & Ketentuan
            </Link>
            {" "}dan{" "}
            <Link 
              to="/kebijakan-privasi" 
              className="text-primary hover:underline font-medium"
              onClick={() => onOpenChange(false)}
            >
              Kebijakan Privasi
            </Link>
            {" "}kami.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Nanti
          </Button>
          <Button
            className="flex-1 gap-2 bg-secondary hover:bg-secondary/90"
            onClick={handleDownload}
            disabled={loading || !data}
          >
            <Download className="w-4 h-4" />
            Download APK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadModal;
