import Nav from "./Nav"

export default function Layout({ children, setCategory, category }) {
  return (
    <>
      <div id="container">
        <Nav setCategory={setCategory} category={category} />
        <main>{children}</main>
      </div>
    </>
  )
}
