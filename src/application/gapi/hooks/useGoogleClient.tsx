import { useEffect, useState } from "react";
import { gAPIKey } from "../../index.ts";

const GAPI_URL = import.meta.env.VITE_GOOGLE_API_URL;

type GoogleClient = typeof gapi.client;

const useGoogleClient = (): GoogleClient => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    async function loadClient() {
      gapi?.client.setApiKey(gAPIKey);
      try {
        await gapi?.client.load(GAPI_URL);

        setClient(gapi?.client);
      } catch (err) {
        console.error("Error loading GAPI client for API", err);
      }
    }

    loadClient();
  }, []);

  return {
    client,
  };
};

export { useGoogleClient };
