import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmailImg from '../Images/EmailImg.png'


const About = () => {
    const navigate = useNavigate();

    function Navigate() {
        navigate('/footer')
    }
    return (
        <>
            <div className='flex flex-col relative'>
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 w-[100vw] h-auto md:h-[8vh] border-b-[2px] border-gray-200 cursor-pointer'>

                    <div className='w-[90%] mx-1 md:w-[50%] h-full md:mx-6'>
                        <nav>
                            <ul className='flex text-[8px] justify-between  font-bold md:h-8 items-end text-gray-500 md:text-sm '>
                                <li className=' text-pink-600 font-bold text-xl visible' >Bribbble</li>
                                <li>Inspiration</li>
                                <li>Find work</li>
                                <li>Learn Design</li>
                                <li>Go Pro</li>
                                <li>Hire Designers</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex justify-end w-[70%] gap-x-8 md:w-[50%] mx-6' >
                        <input
                            type="text"
                            placeholder='Search'
                            className='w-28 h-8 bg-gray-100 indent-6 rounded text-sm font-semibold outline-none'
                        />
                        <button className='bg-pink-500 px-4 h-8 text-white font-bold rounded text-sm' >Upload</button>
                    </div>

                </div> 

                {/* Verify email section */}
                <div className=' flex justify-center items-center md:w-[100vw] h-[92vh] cursor-pointer' >
                    <div className='w-[48%] h-[65%] flex flex-col justify-around items-center text-center text-sm font-semibold text-gray-500'>
                        <h1 className='font-bold text-2xl text-black' >Please verify your email... </h1>
                        <img className='h-20 w-24' src={EmailImg} alt="" />
                        <p>Please verify your email address. We've sent a confirmation email to:</p>
                        <p className='font-bold text-black' >account@refero.design</p>
                        <p>Click the confirmation link in that email to begin using Dribbble</p>
                        <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-pink-500' >resend the confirmation email.</span></p>
                        <p>Wrong email address? <span onClick={Navigate} className='text-pink-500' >Change it.</span></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About