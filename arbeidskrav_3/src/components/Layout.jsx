import Nav from "./Nav";

export default function Layout({children, setCat, cat}) {
  return (
    <>
      <Nav setCat={setCat} cat={cat}></Nav>
      <main>
        {children}
      </main>
    </>
  );
}
