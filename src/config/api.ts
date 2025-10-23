const API_BASE_URL = import.meta.env.PROD 
  ? 'https://rch4sl29v5.execute-api.ap-south-1.amazonaws.com/prod'
  : '/adk';

export { API_BASE_URL };
