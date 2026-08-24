
import { createContext, useEffect, useReducer } from "react";
import { getUser } from "./appwrite";
import { useAppwrite } from "./useAppwrite";

const INITIAL_STATE = {
  user:null,
  loggedIn:false,
  loading: true,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user:null,
        loggedIn:false,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user:action.payload.user,
        loggedIn:true,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        user:null,
        loggedIn:false,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
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
  const { data , loading, error} = useAppwrite({
  fn: getUser,
  params: {},
  skip: false,
    });
    useEffect(() => {
    if (data) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: data,
        },
      });
    } else if (!loading) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: null,
      });
    }
  }, [data,loading]);

  return (
    <AuthContext.Provider
      value={{
        user:state.user,
        loading: loading,
        error:error,
        isLoggedIn: !!state.user,
        data:data,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


