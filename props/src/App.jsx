import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <> </> this is a fragment in react which is used to group a list of children without adding extra nodes to the DOM. It is a shorthand for <React.Fragment></React.Fragment>.
    <> 
      <h1 className="text-3xl font-bold text-blue-500 bg-blue-100 rounded-lg p-4">tailwind test</h1>
      <Card title="My Card" description="This is a sample card description." />
      <Card title="My Card" description="This is a sample card description." />
    </>
  )
}

export default App
