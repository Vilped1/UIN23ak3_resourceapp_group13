import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content'
import { resources } from './resources/ressurser.js'
import Layout from "./components/Layout";

function App() {

  // const {slug} = useParams()
  const [cat, setCat] = useState("HTML")

  return (
    <>      
    <Layout>
      <Content cat={cat} setCat={setCat} />
    </Layout>
    </>
  );
}

export default App;
