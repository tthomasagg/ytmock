import { useEffect, useState } from "react";
import { gAPIKey } from "../../index.ts";

type GoogleClient = typeof gapi.client;

const useGoogleClient = (): GoogleClient => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    async function loadClient() {
      gapi?.client.setApiKey(gAPIKey);
      try {
        await gapi?.client.load(
          "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
        );

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
