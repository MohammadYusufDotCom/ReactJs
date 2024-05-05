import React, { useState }  from "react";
import context from "./contex";

const ContexProvider = ({children})=>{
    const [user,setUser] = useState(null)
return(
    <context.Provider value={{user, setUser}}>
    {children}
    </context.Provider>
)
}

export default ContexProvider;