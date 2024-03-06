export default function Nav({ category, setCategory }) {
  const handleClick = () => {
    setCategory("Heihei")
    console.log(category)
  }
  return <h1 onClick={() => handleClick}>Hahhs</h1>
}
