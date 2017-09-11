// related constants
import { ROUTE_API_DOMAIN } from "./app"

// api endpoints
export const ROUTE_SUBMISSION_API = ROUTE_API_DOMAIN + "/api/submissions"
export const ROUTE_UPLOAD_IMAGE_API =
  ROUTE_API_DOMAIN + "/api/submissions/upload"

// WebSocket
export const WEBSOCKET_UPLOAD_PROGRESS =
  process.env.REACT_APP_WEBSOCKET_UPLOAD_PROGRESS

// redirect rules
export const ROUTE_REDIRECT_AFTER_SUBMIT = "/me"
