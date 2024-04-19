import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Bridegroom from './components/Bridegroom'
import Countdown from './components/Countdown'
import Story from './components/Story'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />

      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Story />


      </div>
    </>
  )
}

export default App
