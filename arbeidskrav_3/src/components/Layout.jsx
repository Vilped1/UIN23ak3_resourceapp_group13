import Nav from "./Nav";

export default function Layout({ children, cat, setCat }) {
  return (
    <>
      <div id="cardbox">
        {" "}
        {/*!!*/}
        <Nav setCat={setCat} cat={cat}></Nav>
        <main>{children}</main>
      </div>{" "}
      {/*!!*/}
    </>
  );
}
