import { useEffect, useState, useSyncExternalStore } from 'react'
import ThemeBtn from './Component/Themebtn'
import Card from './Component/card'
import { ThemeProvider } from './Context/Context'

function App() {
  const [theme, setTheme] = useState("light")
  const [bodyColor, setBodyColor] = useState("#FFFFFF")

  function darktheme(){
    setTheme("dark")
    setBodyColor("#242424")
  }
  function lightTheme(){
    setTheme("light")
    setBodyColor("#FFFFFF")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('#root').setAttribute("style",`background-color: ${bodyColor};`)
    document.querySelector('html').classList.add(theme)
    },[theme])
  return (
    <ThemeProvider value={{theme,darktheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
