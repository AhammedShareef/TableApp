import React, { createContext } from 'react'
import Login from './Pages/Login'
import "./App.css"
import Header from './Pages/Header'

import Form from './Pages/Forms/AddForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ViewModal from './Pages/Components/ViewModal'
import EditForm from './Pages/Components/EditForm'
const mainContext = createContext()

const App = () => {

  return (
    <div>
      
     <mainContext.Provider>
     <Header />
      <BrowserRouter >
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<HomePage  />} />
        <Route path="/form" element={<Form  />} />
        <Route path="/viewModal" element={ <ViewModal />} />
        <Route path="/editForm" element={ <EditForm />} />
     
      </Routes>
      </BrowserRouter> 
      </mainContext.Provider>
    
    </div>
  )
}

export default App