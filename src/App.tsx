import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import UserInfo from './Components/UserInfo'

const App = () => {
  return (
    <>

  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/info" element={<UserInfo />} />
  </Routes>
    </>
  
  )
}

export default App