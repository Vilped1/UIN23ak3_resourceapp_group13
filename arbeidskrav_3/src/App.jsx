import { useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"

function App() {
  let [category, setCategory] = useState("HTML")

  console.log(category)

  return (
    <Layout category={category} setCategory={setCategory}>
      <Routes>
        <Route path=":slug" />
      </Routes>
    </Layout>
  )
}

export default App
