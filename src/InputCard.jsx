import React, { useContext, useRef } from 'react'
import { CardContext } from './App'
import { Link } from 'react-router-dom'

function InputCard() {
  const {userName, setUserName, userNumber, setUserNumber, month, setMonth, year, setYear,  cVV, setCVV} = useContext(CardContext)
  const inputRef = useRef(null)
  const monthRef = useRef(null)
  const yearRef = useRef(null)
  const cvvRef = useRef(null)

  const handleCardNoChange=(e)=> {
    let value = inputRef.current.value.replace(/\s+/g, ''); // Remove all spaces
    if (value > 16){
    value = value.slice(0, 16)
    }
    inputRef.current.value = value.replace(/(.{4})(?=.)/g, '$1 ');

    const hasLetters = /[a-zA-Z]/.test(value)
    if (hasLetters){
      inputRef.current.style.border = '2px solid red'
      inputRef.current.nextElementSibling.style.display = 'block'
    }

    setUserNumber(event.target.value)
  }

  const handleExpMonth = (e) => {
    const maxLength = 2;

    if (monthRef.current.value > maxLength){
      monthRef.current.value = monthRef.current.value.slice(0, maxLength)
    }
    setMonth(event.target.value)
    if (monthRef.current.value < 1 || monthRef.current.value > 12) {
      monthRef.current.style.border = '1px solid red'
    } else {
      monthRef.current.style.border = '1px solid green'

    }

  }

  const handleExpYear = (e) => {
    const maxLength = 2;

    if (yearRef.current.value > maxLength){
      yearRef.current.value = yearRef.current.value.slice(0, maxLength)
    }
    
    setYear(event.target.value)
  
  }

  const handleCVV = (e) => {
    const maxLength = 3;

    if (cvvRef.current.value > maxLength){
      cvvRef.current.value = cvvRef.current.value.slice(0, maxLength)
    }
    setCVV(event.target.value)

  }
  return (
    <div className="input-details w-full uppercase">
      <form className="w-1/2  flex flex-col items-center mx-auto justify-center px-20">
        <div className="mb-5 w-full ">
          <label htmlFor="input-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">cardholder name</label>
          <input type="text" id="input-name" className="border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-[#8e8593] focus:border-[#8e8593] block w-full p-2.5"  onChange={(e)=> setUserName(event.target.value)} required />
        </div>
        <div className="mb-5 w-full">
          <label htmlFor="input-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">card number</label>
          <input type="text" id="input-number" className="border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-[#8e8593] focus:border-[#8e8593] block w-full p-2.5" maxLength="19" required ref={inputRef} onChange={handleCardNoChange}/>
          <p className="color-[#ff5252] extrabold hidden text-[0.4rem]">Wrong format, numbers only</p>

        </div>   
        <div className="flex justify-center">
          <div className="mb-5">
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Exp. date (mm/yy)</label>
            <div className="flex items-center">
              <input type="number" id="input-month" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8e8593] focus:border-[#8e8593] block w-[4rem] p-2.5" ref={monthRef} onChange={handleExpMonth} maxLength="2" required/>
              <input type="number" id="input-year" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8e8593] focus:border-[#8e8593] block w-[4rem] p-2.5 mx-3" ref={yearRef} maxLength="2" onChange={handleExpYear} required />
            </div>
          </div>
          <div>
            <label htmlFor="cv" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">cvv</label>
            <input type="number" id="input-cvc" className="border border-gray-300 text-gray-900 text-sm w-32 rounded-lg focus:ring-[#8e8593] focus:border-[#8e8593] block p-2.5" maxLength="3" onChange={handleCVV} ref={cvvRef} required />
          </div>

        </div>
      
        <button type="submit" className="text-white bg-[#21092f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center"><Link to='/success'>Confirm</Link></button>
      </form>
    </div>

  )
}

export default InputCard