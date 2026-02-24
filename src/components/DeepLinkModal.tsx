import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppUpdate } from "../hooks/useAppUpdate";
import DownloadModal from "./DownloadModal";

type DeepLinkType = "place" | "post" | "user";

const typeConfig: Record<DeepLinkType, { emoji: string; label: string; prefix: string }> = {
  place: { emoji: "📍", label: "Tempat", prefix: "place" },
  post: { emoji: "📸", label: "Postingan", prefix: "post" },
  user: { emoji: "👤", label: "Profil", prefix: "u" },
};

interface DeepLinkModalProps {
  type: DeepLinkType;
  id: string;
}

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DeepLinkModal = ({ type, id }: DeepLinkModalProps) => {
  const navigate = useNavigate();
  const [attempted, setAttempted] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const { data: appUpdate, loading: appUpdateLoading } = useAppUpdate();

  const config = typeConfig[type];
  const customSchemeUrl = `snappie://${config.prefix}/${id}`;
  const downloadUrl = appUpdate?.apk_url ?? null;

  useEffect(() => {
    const timeout = setTimeout(() => setAttempted(true), 2000);
    window.location.href = customSchemeUrl;
    return () => clearTimeout(timeout);
  }, [customSchemeUrl]);

  const handleClose = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      >
        <div
          className="relative mx-4 w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-600"
            aria-label="Tutup"
          >
            <CloseIcon />
          </button>

          <div className="mb-4 text-5xl">{config.emoji}</div>
          <h2 className="mb-2 text-xl font-bold text-gray-800">
            Buka {config.label} di Snappie
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            {!attempted
              ? "Mencoba membuka aplikasi Snappie..."
              : "Tidak berhasil membuka otomatis? Gunakan tombol di bawah."}
          </p>

          <div className="space-y-3">
            <a
              href={customSchemeUrl}
              className="block w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Buka di Snappie App
            </a>
            {downloadUrl ? (
              <button
                onClick={() => setShowDownload(true)}
                className="block w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Download Snappie{appUpdate?.version_name ? ` v${appUpdate.version_name}` : ""}
              </button>
            ) : (
              <span className="block w-full rounded-xl border border-gray-200 px-6 py-3 text-sm text-gray-400">
                {appUpdateLoading ? "Memuat link download..." : "Download belum tersedia"}
              </span>
            )}
          </div>
        </div>
      </div>

      <DownloadModal open={showDownload} onOpenChange={setShowDownload} />
    </>
  );
};

export default DeepLinkModal;
