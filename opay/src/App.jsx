import React from 'react'
import { Link, Route,Routes} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import "./App.css"
import Dashboard from './components/Dashboard'
import AddMoney from './components/AddMoney'
import Transfer from './components/Transfer'
import ProtectedRoutes from './components/ProtectedRoutes'
import WithdrawMoney from './components/WithdrawMoney'
import TransactionHistory from './components/TransactionHistory'
import ChangePassword from './components/ChangePassword'
import Airtime from './components/Airtime'

function App() {
  return (
    <>
    <Routes>
      <Route path='/opay' element={<Homepage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

      <Route path='/dashboard' element={
        <ProtectedRoutes>
          <Dashboard/>
        </ProtectedRoutes>
      } />

      <Route path='/add-money' element={
        <ProtectedRoutes>
          <AddMoney/>
        </ProtectedRoutes>
      } />

      <Route path='/withdraw' element={
        <ProtectedRoutes>
          <WithdrawMoney/>
        </ProtectedRoutes>
      } />
      
      <Route path='/transfer' element={
        <ProtectedRoutes>
          <Transfer/>
        </ProtectedRoutes>
      } />

      <Route path='/transactions' element={
        <ProtectedRoutes>
          <TransactionHistory/>
        </ProtectedRoutes>
      } />

      <Route path='/change-password' element={
        <ProtectedRoutes>
          <ChangePassword/>
        </ProtectedRoutes>
      } />

      {/* <Route path='/initialize-payment' element={
        <ProtectedRoutes>
          <Airtime/>
        </ProtectedRoutes>
      } /> */}

    </Routes>
    </>
  )
}

export default App