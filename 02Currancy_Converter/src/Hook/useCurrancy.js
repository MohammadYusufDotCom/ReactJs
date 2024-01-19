import { useState, useEffect } from "react";


function useCurrancy(currancy){
    let [data, setData] = useState({})

    useEffect(()=>{
         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currancy}.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currancy]))
        .catch((err)=>console.log(err))
    }, [currancy])


    return data
}
export default useCurrancy;

