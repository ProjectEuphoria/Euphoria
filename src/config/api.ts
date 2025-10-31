const API_BASE_URL = import.meta.env.PROD 
  ? 'http://euphoria-working.eba-4ffwypwr.ap-south-1.elasticbeanstalk.com/adk'
  : '/adk';

export { API_BASE_URL };
