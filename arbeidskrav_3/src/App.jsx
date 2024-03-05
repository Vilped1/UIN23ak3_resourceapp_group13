import { useState } from "react";
import { Content } from "./Content";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("HTML");

  return (
    <Layout category={category} setCategory={setCategory}>
      <Routes>
        <Route path=":slug" element={<Content />} />
      </Routes>
    </Layout>
  );
}

export default App;
