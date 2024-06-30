import { useEffect, useState, useSyncExternalStore } from 'react'
import ThemeBtn from './Component/Themebtn'
import Card from './Component/card'
import { ThemeProvider } from './Context/Context'

function App() {
  const [theme, setTheme] = useState("dark")
  const [bodyColor, setBodyColor] = useState("#242424")
  const title1 = "Beautifull flower, White Background, Create Yusuf"
  const title2 = "People Gathring, Sun Set, Created by Yusuf"
  const title3 = "Restaurant Place for Peace, White Background, Created By Yusuf"

  function darktheme(){
    setTheme("dark")
    setBodyColor("#242424")
  }
  function lightTheme(){
    setTheme("light")
    setBodyColor("#faf9f9")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('#root').setAttribute("style",`background-color: ${bodyColor};`)
    document.querySelector('html').classList.add(theme)
    },[theme])
  return (
    <ThemeProvider value={{theme,darktheme,lightTheme}}>
          <div className="w-full p-16  flex justify-end mb-4">
              <ThemeBtn/>
          </div>
    <div className="flex flex-wrap min-h-screen ">
      <div className="w-full">
          <div className="w-full flex  gap-x-4 justify-between max-w-5xl mx-auto">
              <Card link={'https://tinyurl.com/2p958m3j'} title={title1} price={359}/>
              <Card link={'https://rb.gy/widlsq'} title={title2} price={499}/>
              <Card link={'https://tinyurl.com/ubb5h8cb'} title={title3} price={599}/>
          </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
