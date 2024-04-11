import React from 'react'

const Footer = () => {


    return (
        <>
            <div className='md:h-[100vh] md:w-[100vw]   bg-gray-100 px-10' >
                <div className='flex flex-col justify-center items-center md:items-start md:justify-evenly md:flex-row  py-12'>
                    <div className='flex justify-start items-end md:w-[20%] py-4 md:py-0' >
                        <div className='flex flex-col items-center  justify-start md:items-start gap-y-6 w-[90%]'>
                            <h1 className='font-bold text-xl text-pink-500' >Bribbble</h1>
                            <p className='leading-5 text-sm text-gray-600 font-semibold'>Dribbble is the world's leading community for creatives to show, grow and get hired.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-start md:justify-between gap-x-6 font-semibold text-gray-600 w-[70%]'>
                        <div className='flex flex-col gap-y-4 text-sm' >
                            <p className='font-bold text-black' >For designers</p>
                            <p>Go Pro!</p>
                            <p>Explore design work</p>
                            <p>Design blog</p>
                            <p>overtime podcast</p>
                            <p>Playoffs</p>
                            <p>Weekly Warm-Up</p>
                            <p>Refer a Friend</p>
                            <p>Code of conduct</p>
                        </div>
                        <div className='flex flex-col gap-y-4 text-sm' >
                            <p className='font-bold text-black' >Hire designers</p>
                            <p>Post a job opening</p>
                            <p>Post a freelance project</p>
                            <p>Search for designers</p>
                            <p className='font-bold text-black'  >Brands</p>
                            <p>Advertise with us</p>
                        </div>

                        <div className='flex flex-col gap-y-4 text-sm' >
                            <p className='font-bold text-black' >Company</p>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Support</p>
                            <p>Media Kit</p>
                            <p>Testimonials</p>
                            <p>API</p>
                            <p>Terms of service</p>
                            <p>Privacy policy</p>
                            <p>Cookie policy</p>
                        </div>
                        <div className='flex flex-col gap-y-4 text-sm' >
                            <p className='font-bold text-black' >Directories</p>
                            <p>Design jobs</p>
                            <p>Designers for hire</p>
                            <p>Freelance designers for hire</p>
                            <p>Tags</p>
                            <p>Places</p>
                            <p className='font-bold text-black'  >Design assets</p>
                            <p>Dribbble Marketplace</p>
                            <p>Creative Market</p>
                            <p>Fontsprint</p>
                            <p>Font Squirrel</p>
                        </div>
                        <div className='flex flex-col gap-y-4 text-sm' >
                            <p className='font-bold text-black' >Design Resources</p>
                            <p>Freelancing</p>
                            <p>Design Hiring</p>
                            <p>Design Portfolio</p>
                            <p>Design Education</p>
                            <p>Creative Process</p>
                            <p>Design Industry Trends</p>
                        </div>
                    </div>
                </div>
                <hr className='border-[2px] border-gray-200 mt-4' />
                <div>
                    <div className='flex flex-col md:flex-row justify-between mt-16 text-sm text-gray-500 font-semibold'>
                        <p>2023 Dribbble all rights reserved.</p>
                        <p><span className='font-bold text-black' >20,501,853</span> shots dribbbled</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer