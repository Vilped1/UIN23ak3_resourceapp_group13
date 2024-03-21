// Impoterer komponenter fra nav
import Nav from "./Nav"

// Tar imot props
export default function Layout({ children, category, setCategory }) {
  return (
    <>
      <div id="cardbox">
        {/* Sender props for å gjøre dem tilgjengelig i nav-componentet */}
        <Nav setCategory={setCategory} category={category} />
        <main>{children}</main>
      </div>
    </>
  )
}
