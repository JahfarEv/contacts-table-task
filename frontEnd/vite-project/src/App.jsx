import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { CreateContact } from './components/createContacts';
import ProtectRouter from './utils/ProtectRouter';

const App = () => {
  return (
   <>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectRouter/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-contact' element={<CreateContact/>}/>
      </Route>



    </Routes>
   </>
  )
}

export default App
