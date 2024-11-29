import Hero from "./components/Hero"
import Projects from "./components/Projects"
import { useState } from "react"
function App() {

  const [dark, setDark] = useState(true)
     
  const toggleDark = () =>{
   setDark(!dark)
  
  }
  return (
  <div className="bg-white dark:bg-zinc-900">
  <Hero dark={dark} toggleDark={toggleDark}/>
  <Projects dark={dark}/>
  </div>
  )
}

export default App
