import Nav from "./Nav"

const Layout = ({ children, cat, setCat }) => (
  <div id="cardbox">
    <Nav setCat={setCat} cat={cat} />
    <main>{children}</main>
  </div>
)

export default Layout