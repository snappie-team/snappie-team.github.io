import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppUpdate } from "../hooks/useAppUpdate";

type DeepLinkType = "place" | "post" | "user";

const typeConfig: Record<DeepLinkType, { emoji: string; label: string; prefix: string }> = {
  place: { emoji: "📍", label: "Tempat", prefix: "place" },
  post: { emoji: "📸", label: "Postingan", prefix: "post" },
  user: { emoji: "👤", label: "Profil", prefix: "u" },
};

const DeepLinkRedirect = ({ type }: { type: DeepLinkType }) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [attempted, setAttempted] = useState(false);
  const { data: appUpdate, loading: appUpdateLoading } = useAppUpdate();

  const config = typeConfig[type];
  const customSchemeUrl = `snappie://${config.prefix}/${id}`;
  const downloadUrl = appUpdate?.apk_url ?? null;

  useEffect(() => {
    // Try to open the app automatically
    const timeout = setTimeout(() => {
      setAttempted(true);
    }, 2000);

    window.location.href = customSchemeUrl;

    return () => clearTimeout(timeout);
  }, [customSchemeUrl]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-4 max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mb-4 text-6xl">{config.emoji}</div>
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Buka {config.label} di Snappie
        </h1>
        <p className="mb-6 text-gray-500">
          {!attempted
            ? "Membuka aplikasi Snappie..."
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
            <a
              href={downloadUrl}
              className="block w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Download Snappie {appUpdate?.version_name ? `v${appUpdate.version_name}` : ""}
            </a>
          ) : (
            <span className="block w-full rounded-xl border border-gray-200 px-6 py-3 text-gray-400">
              {appUpdateLoading ? "Memuat link download..." : "Download belum tersedia"}
            </span>
          )}
          <a
            href="/"
            className="inline-block pt-2 text-sm text-gray-400 underline hover:text-gray-600"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeepLinkRedirect;
