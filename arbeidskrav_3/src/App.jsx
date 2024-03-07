import { useEffect, useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Nav from "./components/Nav"
import Content from "./components/Content"

function App() {
  const [category, setCategory] = useState("HTML")

  return (
    <Layout>
      <Nav category={category} setCategory={setCategory} />
      <Routes>
        <Route index element={<Content category={category} />} />
        <Route path=":slug" element={<Content category={category} />} />
      </Routes>
    </Layout>
  )
}

export default App
