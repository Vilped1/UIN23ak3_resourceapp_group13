import Nav from "./Nav"

export default function Layout({ children, category, setCategory }) {
  return (
    <>
      <div id="cardbox">
        <Nav setCategory={setCategory} category={category}></Nav>
        <main>{children}</main>
      </div>
    </>
  )
}
