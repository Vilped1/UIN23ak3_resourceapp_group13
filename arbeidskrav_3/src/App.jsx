import { useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Nav from "./components/Nav"
import Content from "./components/Content"

function App() {
  const [category, setCategory] = useState(
    sessionStorage.getItem("category") || "HTML"
  )

  console.log(category.replaceAll(" ", "-").toLowerCase())

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      sessionStorage.setItem("category", "HTML")
      setCategory("HTML")
    }
    sessionStorage.setItem("category", category)
  }, [category, location])

  return (
    <Layout>
      <Nav setCategory={setCategory} category={category} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/html" />} />
        <Route
          path={`/${category.replaceAll(" ", "-").toLowerCase()}`}
          element={<Content category={category} />}
        />
      </Routes>
    </Layout>
  )
}

export default App
