import { useState } from "react";
import "./app.css";

function App() {

  let [background,setBackground] = useState("black")
  console.log(background)
  return (
    <div className="w-full h-lvh" style={{backgroundColor:background}} >
      <div className="bg-white rounded-2xl p-2 mx-16 flex gap-3 justify-center bottom-12 absolute flex-wrap px-3 py-2 inset-x-0 " >
        <button onClick={()=>setBackground("red")} className="bg-red-600 px-4 py-2 rounded-2xl text-white outline-none cursor-pointer ">Red</button>
        <button onClick={()=>setBackground("green")} className="bg-green-600 px-4 py-2 rounded-2xl text-white outline-none cursor-pointer ">Green</button>
        <button onClick={()=>setBackground("blue")} className="bg-blue-600 px-4 py-2 rounded-2xl text-white outline-none cursor-pointer ">Blue</button>
        <button onClick={()=>setBackground("pink")} className="bg-pink-600 px-4 py-2 rounded-2xl text-white outline-none cursor-pointer ">Pink</button>
        <button onClick={()=>setBackground("purple")} className="bg-purple-600 px-4 py-2 rounded-2xl text-white outline-none cursor-pointer ">Purple</button>
        <button onClick={()=>setBackground("orange")} className="bg-orange-600 px-4 py-2 rounded-2xl text-white outline-none cursor-pointer ">Orange</button>
        <button onClick={()=>setBackground("yellow")} className="bg-yellow-600 px-4 py-2 rounded-2xl text-white outline-none cursor-pointer ">Yellow</button>
      </div>
    </div>
  )
}

export default App
