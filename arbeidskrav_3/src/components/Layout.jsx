import Nav from "./Nav";

export default function Layout({children, setCat}) {
  return (
    <>
      <Nav setCat={setCat}></Nav>
      <main>
        {children}
      </main>
    </>
  );
}
