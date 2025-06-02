import React from 'react'
import { Link, Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import "./App.css"
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App