import { createContext,useState,useContext } from "react";
export const MyContext = createContext(null)


export const CartContextProvider =  ({children})=>{
    const [cart,setCart] = useState([]);
    return(
        <MyContext.Provider value={{cart,setCart}}>
            {children}
        </MyContext.Provider>
    )
}
export const CartContext = ()=> {
    const Mycart = useContext(MyContext)
    return Mycart
}