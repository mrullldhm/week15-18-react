import Counter from './components/Counter'
import './App.css'

const students = [
  "Alice", "John", "Bob", "Jane", "Mike", "Emily", "David", "Sarah", "Tom", "Olivia",
  "Sophia", "Daniel", "Emma", "James", "Ava", "William", "Mia", "Alexander", "Charlotte", "Ethan", "Amelia",
]

const App = () => {
  return (
    <>
      {
        students.map((student, index) => {
          return <Counter key={index} name={student} />
        })
      }
    </>
  )
}

export default App
