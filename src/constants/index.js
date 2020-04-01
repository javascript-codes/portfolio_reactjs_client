export const PORTFOLIO_API_URL = process.env.REACT_APP_BASE_URL +
    process.env.REACT_APP_BASE_URL_API_PREFIX +
    process.env.REACT_APP_BASE_URL_API_RESOURCES_PORTFOLIO;

//http status
export const OK = 200;
export const CREATED = 201;
export const NO_CONTENT = 204;
export const PARTIAL_CONTENT = 206;
export const NOT_MODIFIED = 304;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const UNPROCESSABLE_ENTITY = 422;
export const SERVER_ERROR = 500;

//http headers
export const HTTP_HEADER_THE_TIMEZONE_IANA = 'The-Timezone-IANA';
//react routes
export const REACT_ROUTE_PORTFOLIO_DASHBOARD = "/dashboard";


//actions types
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const CREATE_PORTFOLIO_ACTION = "CREATE_PORTFOLIO_ACTION";

// model
export const MODEL_FIELD_NAME_PORTFOLIO_ID = 'id';
export const MODEL_FIELD_NAME_PORTFOLIO_NAME = 'name';
export const MODEL_FIELD_NAME_PORTFOLIO_CREATED_AT = 'createdAt';
export const MODEL_FIELD_NAME_PORTFOLIO_UPDATED_AT = 'updatedAt';

// validation
export const PORTFOLIO_NAME_CONSTRAINT_MIN_SIZE = 1;
export const PORTFOLIO_NAME_CONSTRAINT_MAX_SIZE = 32;
