import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Lincoln from './components/lincoln'
import './App.css'

function App() {
  // This is a state call VVVV
  const [count, setCount] = useState(0)
  // const [players,setPlayers] = useState([])
  const [bestDog, setBestDog] = useState(null)
  console.log(bestDog);
  const dogs = [
    { name: "Logan", breed: "Italian Greyhound", age: 14 },
    { name: "Chase", breed: "Italian Greyhound", age: 12 },
    { name: "Lincoln", breed: "Mixed Rescue", age: 5 },
  ];
  return (
    <>

      <h1>Vite + React</h1>
      {/* {bestDog ? <h2>{bestDog} is the best dog!</h2>:<h3>No dog selected.</h3>} */}
      {bestDog && <h2>{bestDog} is the best dog!</h2>}
{      dogs.map((dog) => {
        return <p key={dog.name} onClick={()=>setBestDog(dog.name)}>{dog.name} is a {dog.age} year old {dog.breed}</p>
      })}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
