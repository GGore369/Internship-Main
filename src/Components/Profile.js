import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeInput from '../Images/ImageInput.png'




const Profile = () => {

  const navigate = useNavigate();

  const [location, setLocation] = React.useState("");
  const [image, setImage] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  function handleChange(event) {
    
    setLocation(event.target.value);
  }

  function Navigate() {
    navigate('/dribbleinfo')
  }



  return (
    <>
      <div className='flex flex-col justify-center items-center  w-[100vw] h-[100%] md:h-[100vh] gap-y-8 px-10 md:px-0 md:py-0 relative cursor-pointer' >
      <div className='absolute left-6 top-1 text-pink-600 font-bold text-xl '>Bribbble</div>

        <div className='flex flex-col justify-center md:items-start py-8 gap-y-8 px-10 md:px-0 md:py-0'>


          <div className='flex flex-col justify-center items-center md:items-start gap-y-4'>
            <h1 className='flex flex-col justify-center items-center md:flex-row gap-x-2 font-bold text-xl md:text-3xl' > <p className='text-center text-3xl'>Welcome!</p>Let's create your profile</h1>
            <p className='text-gray-500 font-semibold text-xs md:text-[14px]' >Let others get to know you better! <span onClick={Navigate} > you can do these later</span></p>
          </div>

          <div className='flex flex-col justify-center items-center md:items-start  gap-y-10 md:gap-y-4'>
            <p className='flex m font-extrabold text-l' >Add an Avatar</p>

            <div className='flex flex-col justify-center items-center gap-y-4 md:flex-row md:gap-x-6 '>

              {!image && <img className='rounded-full h-32 w-32 border-black border-2' src={HomeInput} alt="" />}
              {image && <img className='rounded-full h-32 w-32 border-black border-2' src={image} alt="" />}
              <div className='flex flex-col justify-center items-center md:items-start md:mx-4 gap-y-4'>
                {/* <button className='py-2 p border-2 border-slate rounded-lg text-xs font-bold w-40 md:w-28'>Choose Image</button> */}
                <label htmlFor="imageInput" className="custom-file-upload">
                  Choose Image
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }} // Hide the default input
                  />
                </label>
                <p className='md:text-xs font-bold text-gray-400' >Or choose one of our default</p>
              </div>

            </div>

          </div>

          <div className='flex flex-col gap-y-3 justify-center items-center md:items-start w-[100%] md:my-4'>
            <p className='text-l font-extrabold' >Add your location</p>
            <input
              type="text"
              autoComplete='on'
              placeholder='Enter a location'
              name='location'
              value={location}
              onChange={handleChange}
              className='outline-none rounded font-semibold p-2 indent-4 border-b-2 w-60  md:indent-0 md:px-0 md:w-[100%]'
            />
          </div>

          <div className='md:mt-6'>
            <button onClick={Navigate} className={`px-20 py-2 ${location&&image ? 'bg-pink-600' : 'bg-pink-300'} text-white rounded-lg md:text-sm font-bold`} >Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile