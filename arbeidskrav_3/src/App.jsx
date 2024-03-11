import { useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Content from "./components/Content"

function App() {
  const [category, setCategory] = useState(
    sessionStorage.getItem("category") || "HTML"
  )

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      setCategory("HTML")
    }
    sessionStorage.setItem("category", category)
  }, [category, location])

  return (
    <Layout setCategory={setCategory} category={category}>
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
