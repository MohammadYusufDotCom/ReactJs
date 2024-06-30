import {createContext,useContext} from 'react'

export const ThemeContext = createContext(
    {
        theme: 'light',
        lightTheme: () => {},
        darktheme:()=>{}
    }
);

export const UseTheme = () =>{
    return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider


// ({Children})=>{
//     return(
//         <ThemeContext.Provider>
//             {Children}
//         </ThemeContext.Provider>
//     )
// }