// Use same-origin in production to avoid mixed-content; allow override via VITE_API_BASE_URL.
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? '/adk' : '/adk');

export { API_BASE_URL };
