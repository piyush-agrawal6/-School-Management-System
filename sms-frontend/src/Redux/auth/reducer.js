import * as types from "./types";
const TOKEN = localStorage.getItem("token");
const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  userLogout: { message: "" },
  data: {
    isAuthenticated: !!TOKEN,
    token: TOKEN,
    user: null,
  },
};
export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_STUDENT_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };
    case types.LOGIN_TEACHER_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };
    case types.LOGIN_ADMIN_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };

    case types.LOGIN_STUDENT_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          isAuthenticated: payload.token ? true : false,
          token: payload.token,
          user: payload.user,
        },
      };

    case types.LOGIN_ADMIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          isAuthenticated: payload.token ? true : false,
          token: payload.token,
          user: payload.user,
        },
      };
    case types.LOGIN_TEACHER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          isAuthenticated: payload.token ? true : false,
          token: payload.token,
          user: payload.user,
        },
      };

    case types.LOGIN_STUDENT_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };
    case types.LOGIN_ADMIN_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };
    case types.LOGIN_TEACHER_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };
    case types.EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        data: {
          user: payload,
        },
      };
    case types.EDIT_TEACHER_SUCCESS:
      return {
        ...state,
        data: {
          user: payload,
        },
      };
    case types.LOGIN_ADMIN_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };

    case "AUTH_LOGIN_RESET":
      return {
        ...state,
        userLogin: { loading: false, error: false, message: "" },
      };
    case types.AUTH_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        userLogin: { loading: false, error: false, message: "" },
        userLogout: { message: "Logout Successfully" },
        data: {
          isAuthenticated: false,
          token: null,
          user: null,
        },
      };
    default:
      return state;
  }
}
