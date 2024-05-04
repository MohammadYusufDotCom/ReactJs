import React, { useState }  from "react";
import context from "./contex";

const contexProvider = ({children})=>{
    const [user,setUser] = useState(null)
return(
    <context.Provider>
    {children}
    </context.Provider>
)
}

export default contexProvider;