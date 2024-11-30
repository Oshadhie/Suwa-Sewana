import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*-------left------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Suwa Sewana is simply dummy text of the printing and typysetting industry. 
                    Suwa Sewana has been the industry's standard dummy text ever since the 1500s, When an unknown printer took an galley of type and scramble. </p>
            </div>
            
            {/*-------center------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            
            {/*-------right------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+23-74-282-474</li>
                    <li>suwasewana@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Suwasewana - All Right Resrved</p>
        </div>
    </div>
  )
}

export default Footer