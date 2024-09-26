
/*

The purpose of this code is to create a context for authentication (auth) for our app, making it possible to share user authentication data (like user info and token) across the whole application without passing it down through props at every level. 

*/

import { useState, useContext, createContext, useEffect } from "react";

// Create a new context object called AuthContext..This context will hold the authentication data (user and token). 'AuthContext' is a storage box that holds the authentication data (user and token). 

const AuthContext = createContext() ; 

// Define a component called AuthProvider that will provide the authentication data to other components. This component wraps around other components to 'provide' the authentication data (user and token) to all of them. It uses useState to hold and update the authentication data. 

const AuthProvider = ({children}) => {

    // useState hook to manage the authentication data (user and token). By default, the 'user' is set to null (no longer logged in) and 'token' is an empty string (no token). 

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    }) ; 

    useEffect(()=>{
        const data = localStorage.getItem('auth') ; 

        if(data){
            const parseData = JSON.parse(data) ; 
            setAuth({
                ...auth, 
                user:parseData.user,
                token: parseData.token
            })
        }
        //eslint-disable-next-line
    }, [])

    // The AuthContext.Provider wraps around all child components (passed as 'children'). It makes the 'auth' and 'setAuth' values available to any component that consumes this context. It passes the 'auth' and 'setAuth' values to the 'AuthContext.Provider' making them available to any component that asks for this data. 

    return (
        <AuthContext.Provider value={[auth, setAuth]} >
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook called 'useAuth' that provides an easy way for components to access the authentication context. 

// useContext (AuthContext) allows components to consume the authentication data (auth and setAuth). 'useAuth' is a custom hook that allows components to easily access the 'auth' and 'setAuth' values from the context. 

const useAuth = ()=> useContext(AuthContext) ; 

export {useAuth, AuthProvider}


/*

CONTEXT - is a way to pass data through the component tree without having to pass props manually at every level. Think of it as global variable that is accessible to any component in our app. 

- Context lets us pass data (like user and token) through the component tree without props. 

- AuthProvider manages the 'auth' state and makes it available to all components wrapped in it. 

- useAuth is a simple way for any component to access the 'auth' state      

*/