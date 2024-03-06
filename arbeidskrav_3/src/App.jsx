import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  // const {slug} = useParams()
  const [cat, setCat] = useState("Sanity and Headless CMS");

  return (
    <>
      <Layout setCat={setCat} cat={cat}>
        {/* <Routes> */}
        {/* <Route path=":slug" element={<Content cat={cat} />} /> */}
        {/* </Routes> */}
        <Content cat={cat} />
      </Layout>
    </>
  );
}

export default App;
