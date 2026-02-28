import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard.jsx'
import Testing from './components/testing.jsx'
import LoginPage from './pages/loginPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPage />
    </>
  )
}

export default App
