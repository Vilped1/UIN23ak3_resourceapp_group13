import { useEffect, useState } from 'react'
// import './App.css'
import Content from './components/Content'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [cat, setCat] = useState("HTML")
  console.log(cat)

  return (
    <>
      <Layout setCat={setCat} cat={cat} >
        <Content cat={cat} />
      </Layout>
    </>
  )
}

export default App;
