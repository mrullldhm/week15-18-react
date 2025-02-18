import Title from "./component/title"
import Cat from "./component/cat"

const App = () => {
  const style = {
    color: "blue",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "3rem",
  }

  return (
    <div style = {style}>
      <h1>Hello World</h1>
      <Title 
        name = "Amirul"
        role = "Full Stack Web Development"
        meow = {() => console.log("Meow")}
      />
      <Title 
        name = "Adham"
        role = "Engineer"
        isEngineer = "true"
      />
    </div>
  )
}

export default App
