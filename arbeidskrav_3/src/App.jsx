import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content'
import { resources } from './resources/ressurser.js'


function App() {

  // const {slug} = useParams()
  const [cat, setCat] = useState("HTML")

  return (
    <>
      <Content cat={cat} setCat={setCat} />
    </>
  )
}

export default App
