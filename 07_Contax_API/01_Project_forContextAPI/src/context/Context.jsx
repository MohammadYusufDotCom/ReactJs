import { createContext, useState } from "react";

export const ConutContext = createContext(null);


export const ConutContextProvider = (props)=>{
    const [count, setCount] = useState(0)
    return(
        <ConutContext.Provider value={{count, setCount}}>
            {props.children}
        </ConutContext.Provider>
    );
};