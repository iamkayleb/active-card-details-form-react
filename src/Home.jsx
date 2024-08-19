import React, { useContext } from 'react'
import OutputCard from './OutputCard'
import InputCard from './InputCard'
import { CardContext } from './App'

function Home() {
    const {userName, setUserName, userNumber, setUserNumber, month, setMonth, year, setYear,  cVV, setCVV} = useContext(CardContext)
  return (
    <>
        <main>
            <OutputCard/>
            <InputCard/>
        </main>
    </>
  )
}

export default Home