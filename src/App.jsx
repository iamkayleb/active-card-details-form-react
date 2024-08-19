import { createContext, useState } from 'react'

import './App.css'
import SuccessPage from './SuccessPage'
import Home from './Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


export const CardContext = createContext(null)
function App() {
 
  const [userName, setUserName] = useState('')
  const [userNumber, setUserNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cVV, setCVV] = useState('')
  return (
    <CardContext.Provider value={{userName, setUserName, userNumber, setUserNumber, month, setMonth, year, setYear,  cVV, setCVV}}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/success" element={<SuccessPage />}/> 
          </Routes>
      </BrowserRouter>
     </CardContext.Provider>
   
      
  )
}

export default App
