export const PORTFOLIO_API_URL = process.env.REACT_APP_BASE_URL +
    process.env.REACT_APP_BASE_URL_API_PREFIX +
    process.env.REACT_APP_BASE_URL_API_RESOURCES_PORTFOLIO;

//http status
export const OK = 200
export const CREATED = 201
export const NO_CONTENT = 204
export const PARTIAL_CONTENT = 206
export const NOT_MODIFIED = 304
export const BAD_REQUEST = 400
export const UNAUTHORIZED = 401
export const FORBIDDEN = 403
export const NOT_FOUND = 404
export const UNSUPPORTED_MEDIA_TYPE = 415
export const UNPROCESSABLE_ENTITY = 422
export const SERVER_ERROR = 500

//http headers
export const HTTP_HEADER_THE_TIMEZONE_IANA = 'The-Timezone-IANA';


//actions types
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const CREATE_PORTFOLIO_ACTION = "CREATE_PORTFOLIO_ACTION";