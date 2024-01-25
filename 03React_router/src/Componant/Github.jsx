import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Github(){
    // const data = useLoaderData()
    // const {userId : yusuf} = useParams()
    const [data, setData]=useState("")
    fetch('https://api.github.com/users/MohammadYusufdotcom').then(resp=>resp.json()).then( res=>setData(res))

    return (
        <div className="h-full flex justify-center flex-col items-center ">
        <img src={data.avatar_url}  
         alt="avatars" 
         className="h-full rounded-full p-5"
         id="logo"/>
        <label htmlFor="" className="font-bold mb-5">This is avatar for yusuf without loader </label> 
        <div>
             
        </div>


        </div>
    )
}

export default Github

// export const loaderforgithub = async ()=>(fetch("https://api.github.com/users/MohammadYusufdotcom").then(res =>  res.json()))