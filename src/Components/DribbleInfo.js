import React from 'react'
import { useNavigate } from 'react-router-dom'
import WorkImg from '../Images/Work.jpeg'
import HireImg from '../Images/Hire.jpeg'
import InspirationImg from '../Images/Inspiration.jpeg'

const DribbleInfo = () => {
    const navigate = useNavigate();

    function Navigate() {
        navigate('/about')
    }
    function NavigateBack() {
        navigate(-1)
    }

    const [isChecked, setChecked] = React.useState({
        work: false,
        hire: false,
        inspiration: false
    })

    function handleCheck(event) {
        const { name, checked } = event.target;
        setChecked(prevState => {
            return {
                ...prevState,
                [name]: checked
            }
        })

    }
    function GoBack() {
        navigate(-1)
    }
    console.log(isChecked)

    return (
        <>

            {/* <button onClick={toggle} className='p-1 bg-blue-600 text-white'>Next Step</button>
            <button onClick={Navigate} className='p-1 bg-blue-600 text-white'>Prev Step</button> */}


            <div className='flex flex-col justify-center items-center py-6 px-8 md:px-0 md:py-0 h-[100%] scroll-y md:h-[100vh] relative cursor-pointer'>

                <div className='absolute left-6 top-1 text-pink-600 font-bold text-xl '>Bribbble</div>
                <button onClick={GoBack} className='absolute left-32 top-1 py-[6px] px-6 font-bold text-sm bg-gray-200 text-gray-600 rounded'>Back</button>
                <div className='flex flex-col mt-16 justify-around items-center gap-y-10 md:h-[75vh]' >
                    <div className='flex flex-col gap-y-4'>
                        <h1 className='font-bold text-3xl text-center' >What brings you to Dribbble?</h1>
                        <p className='text-xs font-semibold text-gray-500'>Select the options that best describes you. Don't worry, you can explore other options later</p>
                    </div>

                    {/* Dribble Cards */}

                    <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-around gap-x-8' >

                        <div className={`flex flex-col justify-center items-center gap-y-2 border-[2px] border-gray h-48 md:w-56 md:h-56 rounded-xl ${isChecked.work ? 'border-pink-600' : 'border-gray-200'}`} >
                            <div className='flex flex-col justify-center items-center w-44 gap-y-2'>
                                <img className='h-28 w-40 filter saturate-200' src={WorkImg} alt="" />
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <p className='font-bold text-center leading-4' >I'm a designer looking to share my work</p>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox rounded-full h-4 w-4 "
                                        name='work'
                                        checked={isChecked.work}
                                        onChange={handleCheck}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`flex flex-col justify-center items-center gap-y-2 border-[2px] border-gray h-48 md:w-56 md:h-56 rounded-xl ${isChecked.hire ? 'border-pink-600' : 'border-gray-200'}`} >
                            <div className='flex flex-col justify-center items-center w-44 gap-y-2'>
                                <img className='h-28 w-40 filter saturate-200' src={HireImg} alt="" />
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <p className='font-bold text-center leading-4' >I'm looking to hire a designer</p>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox rounded-full h-4 w-4 bg-pink-500"
                                        name='hire'
                                        checked={isChecked.hire}
                                        onChange={handleCheck}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`flex flex-col justify-center items-center gap-y-2 border-[2px] h-48  md:w-56 md:h-56 rounded-xl ${isChecked.inspiration ? 'border-pink-600' : 'border-gray-200'} `}>
                            <div className='flex flex-col justify-center items-center w-44 gap-y-2'>
                                <img className='h-28 w-40 filter saturate-200' src={InspirationImg} alt="" />
                                <div className='flex flex-col justify-center items-center gap-y-2'>
                                    <p className='font-bold text-center leading-4' >I'm looking to design inspiration</p>

                                    <input
                                        type="checkbox"
                                        className="form-checkbox rounded-full h-4 w-4 mb-3"
                                        name='inspiration'
                                        checked={isChecked.inspiration}
                                        onChange={handleCheck}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center gap-y-6'>
                        <p className='font-bold text-sm' >Anything else? you can select multiple</p>
                        <div className='flex flex-col justify-center items-center gap-y-2' >
                            <button onClick={Navigate} className={`${((isChecked.work || isChecked.hire) || isChecked.inspiration) ? 'bg-pink-600' : 'bg-pink-400'} w-44 h-8 text-[11px] text-white font-bold rounded-lg`} >Finish</button>
                            <button onClick={NavigateBack} className='font-bold text-[10px] text-gray-400' >or Press RETURN</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default DribbleInfo