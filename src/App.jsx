import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavbarItems from './components/navbar/NavbarItems'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarItems/>
     <div className="min-vh-100">
     <Outlet/>
     </div>
     <Footer/>
    </>
  )
}

export default App
