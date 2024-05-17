import { useState } from 'react'
import ThemeBtn from './Component/Themebtn'
import Card from './Component/card'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
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
  )
}

export default App
