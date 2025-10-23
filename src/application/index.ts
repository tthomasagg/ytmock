const gAPIKey = import.meta.env.VITE_GOOGLE_API_KEY;

if (!gAPIKey) console.error("Missing Google API Key");

export { gAPIKey };
