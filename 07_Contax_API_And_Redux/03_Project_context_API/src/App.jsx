import { useEffect, useState } from 'react'
import ThemeBtn from './Component/Themebtn'
import Card from './Component/card'
import { ThemeProvider } from './Context/Context'

function App() {
  const [theme, setTheme] = useState("Light")

  function darktheme(){
    setTheme("dark")
  }
  function lightTheme(){
    setTheme("light")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
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
