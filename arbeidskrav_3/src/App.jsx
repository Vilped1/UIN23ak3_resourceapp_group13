import { useEffect, useState } from "react"
// import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Nav from "./components/Nav"
import Content from "./components/Content"

function App() {
  const [category, setCategory] = useState(
    localStorage.getItem("category") || "HTML"
  )

  useEffect(() => {
    localStorage.setItem("category", category)
  }, [category])

  return (
    <Layout>
      <Nav setCategory={setCategory} category={category} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/html" />} />
        <Route
          path={`/${category.split(" ")[0].toLowerCase()}`}
          element={<Content category={category} />}
        />
      </Routes>
    </Layout>
  )
}

export default App
