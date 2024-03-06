import { useParams } from "react-router-dom"

export default function Layout({ category, setCategory, children }) {
  const { slug } = useParams()
  return (
    <>
      <div id="container">{children}</div>
    </>
  )
}
