import Card from "./components/Card"
import Count from "./components/Count"

  const users = [
    {
      name: "John Lennon",
      link: "https://picsum.photos/200",
      active: true,
      education: {
        primary: "Sri Seremban",
        secondary: "SMK Taman Desa",
        Tertiary: "University of Malaya"
      }
    },
    {
      name: "Paul McCartney",
      link: "https://picsum.photos/200",
      active: true,
      education: {
        primary: "Sri Seremban",
        secondary: "SMK Taman Desa",
        Tertiary: "University of Malaya"
      }
    },
    {
      name: "George Harrison",
      link: "https://picsum.photos/200",
      active: true,
      education: {
        primary: "Sri Seremban",
        secondary: "SMK Taman Desa",
        Tertiary: "University of Malaya"
        }
    },
  ]

function App() {  
  return (
    <>
      <Count />
      {
        // Mapping through the array of users and returning the Card component
        users.map((userList,index) => {
          return <Card key={index} user={userList} /> // Passing user data as props
        })
      }
    </>
  )
}

export default App
