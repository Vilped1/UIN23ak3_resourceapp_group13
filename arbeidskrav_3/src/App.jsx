import { useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Content from "./components/Content"
// Tok vekk App.css for å bruke egen sass

function App() {
  //Oppretter state for kategorien og setter den til å være lik det som er lagret i sessionStorage eller "HTML" om det ikke finnes noe der
  const [category, setCategory] = useState(
    sessionStorage.getItem("category") || "HTML"
  )

  //Henter location fra react-router-dom og setter kategorien til "HTML" om location.pathname er "/".
  // https://reactrouter.com/en/main/hooks/use-location
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      setCategory("HTML")
    }
    sessionStorage.setItem("category", category)
  }, [category, location])

  //Returnerer Layout-komponenten med Routes og Route-komponenter. Route-komponenten har en index som sender brukeren til /html og en path som sender brukeren til /html, /css, /javascript eller /react. Her utnytter vi category-state til å sette riktig path ved bruk av metodene split og toLowerCase.
  return (
    <Layout setCategory={setCategory} category={category}>
      <Routes>
        <Route index element={<Navigate replace to="/html" />} />
        <Route
          path={`/${category.split(" ")[0].toLowerCase()}`}
          element={<Content category={category} />}
        />
      </Routes>
    </Layout>
  )
}

export default App
