import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreennav from './components/Navigation/FullScreennav'


const App = () => {

  return (
    <div>
      <Navbar />
      <FullScreennav />
      {/* 
       <Link className='text-blue-500 text-sm mr-5' to='/'>Home</Link>
       <Link className='text-blue-500 text-sm mr-5' to='/agents'>Agents</Link>
       <Link className='text-blue text-sm mr-5' to='/projects'>Projects</Link> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
