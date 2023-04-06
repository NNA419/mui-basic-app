import { createContext, useReducer } from "react";

const LOGIN_SUCESS = "LOGIN_SUCESS";
const LOGOUT = "LOGOUT";
const initial = { user : null };
const AuthContext = createContext();

function reduce(state, action) {
    switch (action.type) {
        case LOGIN_SUCESS:
            // console.log(action);
            return { ...state, user: action.payload.user };
        case LOGOUT:
            return { ...state, user: null };
      default:
        return state;
    }
}
    
const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reduce, initial)
    
    // console.log(state);
    
    const Login = async (username) => {
        dispatch({ type: LOGIN_SUCESS, payload: { user: { username } } });
        // console.log(username);
    };

     const Logout = async ( ) => {
    dispatch({ type: LOGOUT });
       // console.log(username);
     };

    return (
    <AuthContext.Provider value={{ ...state, Login , Logout }}>
        {children}   
    </AuthContext.Provider> );
}



export { AuthProvider, AuthContext };