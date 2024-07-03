// const API_URL = "https://bed-express-event-api.onrender.com";
const API_URL = "https://bed-express-event-api.onrender.com";

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/signin`,
  GET_USER: `${API_URL}/auth/me`,
};

export const APP_ROUTES = {
  SIGN_UP: "/auth/signup",
  SIGN_IN: "/auth/signin",
  DASHBOARD: "/dashboard",
};

export { API_URL };
