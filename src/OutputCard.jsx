import React, { useContext } from 'react'
import cardFront from './assets/images/bg-card-front.png'
import cardLogo from "./assets/images/card-logo.svg"
import cardBack from "./assets/images/bg-card-back.png"
import { CardContext } from './App'

function OutputCard() {
  const {userName, setUserName, userNumber, setUserNumber, month, setMonth, year, setYear,  cVV, setCVV} = useContext(CardContext)
  return (
    <>
        <div className="cards-bg space-y-6 flex flex-col uppercase tracking-wider text-[#ffffff]">
            <div className="front-card translate-x-8 translate-y-4">
                <img src={cardFront} alt="" className="relative"/>
                <img src={cardLogo} className="absolute top-4 left-8 "/>
                <h1 id="output-number" className="absolute right-4 left-8 bottom-14 text-2xl ">{userNumber}</h1>
                <div className="flex">
                <p id="output-name" className=" absolute bottom-4 left-8">{userName}</p>
                <p id="" className=" absolute bottom-4 right-8"><span id="output-month">{month}</span>/<span id="output-year">{year}</span></p>
                </div>
            </div>
            <div className="back-card translate-x-20 translate-y-4">
                <img src={cardBack} className="relative"/>
                <p id="output-cvc" className="absolute top-[90px] right-10">{cVV}</p>
            </div>
        </div>
    </>
  )
}

export default OutputCard