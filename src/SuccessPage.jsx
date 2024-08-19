import React from 'react'
import OutputCard from './OutputCard'
import iconCheck from './assets/images/icon-complete.svg'
function SuccessPage() {
  return (
    <>
      <main>
        <OutputCard/>
        <div className='flex items-center justify-center w-full '>
          <div className='w-1/2  flex flex-col items-center mx-auto justify-center px-20'>
            <img src={iconCheck} alt="" className='my-5' />
            <h1 className='text-[2rem] uppercase'>Thank You</h1>
            <p className='my-5'>We'v added your card details</p>
            <button type="submit" className="text-white bg-[#21092f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center">Confirm</button>
          </div>
          
        </div>
      </main>
    </>
  )
}

export default SuccessPage