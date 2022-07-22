import React, {createContext, useContext, useReducer} from "react";


//Prepare the dataLayer
export const StateContext  = createContext();

//Wrap our app and provide the datalayer to every component of our app
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pulls Information from the data layer
export const useStateValue  = () => useContext(StateContext);