const API_BASE_URL = import.meta.env.PROD 
  ? 'https://euphoria-production.up.railway.app/adk'
  : '/adk';

export { API_BASE_URL };
