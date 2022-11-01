import { useState, useEffect } from 'react'

function App() {
  const [test, useTest] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cocktails')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <div>
      <h1>Mixology Buddy</h1>
    </div>
  )
}

export default App;
