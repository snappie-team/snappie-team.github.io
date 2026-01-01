import { useState, useEffect } from "react";

interface AppUpdateData {
  id: number;
  version_name: string;
  version_code: number;
  device_platform: string;
  apk_url: string;
  changelogs: string;
  created_at: string;
  updated_at: string;
}

interface AppUpdateResponse {
  success: boolean;
  message: string;
  data: AppUpdateData;
}

export const useAppUpdate = () => {
  const [data, setData] = useState<AppUpdateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAppUpdate = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://snappie.my.id/api/v2/app/update?version_code=1&device_platform=android",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SNAPPIE_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch app update");
      }

      const result: AppUpdateResponse = await response.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppUpdate();
  }, []);

  return { data, loading, error, refetch: fetchAppUpdate };
};
