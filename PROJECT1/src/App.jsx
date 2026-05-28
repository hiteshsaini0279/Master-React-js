import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
  <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <dv className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}onClick={()=>setColor("red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"brown"}}onClick={()=>setColor("brown")}>Brown</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}onClick={()=>setColor("orange")}>Orange</button>
        <button className='outline-none px-4 py-1 rounded-full  shadow-lg' style={{backgroundColor:"yellow"}}onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}onClick={()=>setColor("black")}>Black</button>
        <button className='outline-none px-4 py-1 rounded-full  shadow-lg' style={{backgroundColor:"lavender"}}onClick={()=>setColor("lavender")}>Lavender</button>

      </div>
    </dv>
  </div>
  )
}

export default App
