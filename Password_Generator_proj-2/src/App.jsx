import { useState,useEffect, useCallback,useRef } from "react";
import "./App.css";

function App() {
  const [password, setpassword] = useState("hhiiohio");
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(true);
  const [charAllowed, setcharAllowed] = useState(true);

  let passwordChanger = useCallback (()=>{
    let pass ='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str+='0123456789'
    if(charAllowed) str +='~!@#$%^&*"?.,_<>-'

    for (let i = 0; i < length; i++){
      let random = Math.floor((Math.random() * str.length)+1)
      pass += str.charAt(random);
    }
    setpassword(pass)
  
},[length,numberAllowed,charAllowed])

  //Ref hook using
  const refPassword = useRef(null)
   const copyClipBoard = useCallback(()=>{
    refPassword.current?.select()
    // refPassword.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(() => {
    passwordChanger()
  }, [numberAllowed,charAllowed,length]);

  return (
    <>
      <div className="h-screen w-full flex flex-wrap justify-center  ">
        <div className="w-2/5 min-h-48  absolute top-1/3 rounded-2xl bg-slate-700">
        <h1 className="text-3xl relative text-center mt-4">Password Generator</h1>

          <div className="flex justify-center mt-5 mb-5 ">
            <input className=" w-2/3 outline-none text-sky-700 px-1 rounded-l-lg font-medium" 
            type="text" 
            value={password} 
            readOnly
            ref={refPassword}
            />
            <button 
            className="bg-cyan-600 w-20 font-medium text-lg p-2 rounded-r-lg"
            onClick={copyClipBoard}
            >Copy
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-0.5">
            <input 
            type="range" 
            min={8} 
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>setlength(e.target.value)}
            />
            <label className="mr-3" onChange={""}>Length: {length}</label>

            <input 
            type="checkbox"  
            checked={numberAllowed}
            id="checknum"
            onChange={()=>setnumberAllowed((prev) => !prev)}
            />
            <label htmlFor="checknum"className="mr-3">Number include</label>

            <input 
            type="checkbox"
            checked={charAllowed}
            id="checkchar"
            onChange={()=>setcharAllowed((prev)=> !prev)}
            />
            <label htmlFor="checkchar">Character include</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
