
import { createContext, useReducer } from "react";
import { getUser } from "./appwrite";
import { useAppwrite } from "./useAppwrite";

const INITIAL_STATE = {
  token: null,
  user:null,
  loggedIn:false,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: null,
        user:null,
        loggedIn:false,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        token: action.payload.token,
        user:action.payload.user,
        loggedIn:true,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        token: null,
        user:null,
        loggedIn:false,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
        token: null,
        user:null,
        loggedIn:false,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const { data } = useAppwrite({
  fn: getUser,
  params: {},
  skip: false,
    });
  const isLoggedIn = !!data;

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user:state.user,
        loading: state.loading,
        error: state.error,
        isLoggedIn: isLoggedIn,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


