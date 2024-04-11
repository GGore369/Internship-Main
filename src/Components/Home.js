import React from 'react'
import Homeimg from '../Images/HomeImg.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function Navigation() {
    console.log(signform)
    if(signform.isChecked)
      navigate('/profile')
  }

  const [signform, setSignForm] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
    isChecked: false
  });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setSignForm((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(signform)
  }


  return (
    <>
      <div className='flex p-4 md:p-0 md:flex md:flex-wrap relative md:h-[100vh] cursor-pointer'>
        <div className='w-[35vw] hidden md:block'>
          <img className='w-full text-white h-[100vh]' src={Homeimg} alt="" />
        </div>

        <div className='right-0 absolute p-2 mt-2 mr-5 text-sm font-semibold'>Already a member?
          <span className='text-violet-800' > Sign in</span>
        </div>


        <form className='flex w-[100%] h-[100%] md:justify-center md:items-center md:w-[65vw]'>


          <div className='flex flex-col my-20 md:justify-center items-center md:items-start gap-y-5 md:w-[50%]'>

            <div className='flex flex-col gap-y-6'>
              <div className='flex flex-col gap-y-8'>
                <h1 className='font-bold text-xl'>Sign up to Dribbble</h1>
                <p className={`text-red-500 font-semibold text-x ${(signform.name == signform.username)&&(signform.name != "") ? 'visible' : 'invisible'}`}>* Username has already been taken</p>
              </div>

              <div className='flex flex-col md:flex-row gap-x-4'>

                <div className='flex flex-col gap-y-1'>
                  <label className='font-bold' htmlFor="name">Name</label>
                  <input
                    type="text"
                    autoComplete='on'
                    required
                    id='name'
                    placeholder='john'
                    name='name'
                    value={signform.name}
                    className='bg-gray-100 outline-none rounded p-2 indent-4'
                    onChange={handleChange}
                  />
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label className='font-bold' htmlFor="username">Username</label>
                  <input
                    type="text"
                    autoComplete='on'
                    required
                    id='username'
                    placeholder='Snow'
                    name='username'
                    value={signform.username}
                    className='bg-gray-100 outline-none rounded p-2 indent-4'
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className='flex flex-col gap-y-1'>
                <label className='font-bold' htmlFor="email">Email</label>
                <input
                  type="text"
                  autoComplete='on'
                  required
                  id='email'
                  placeholder='abc@gmail.com'
                  name='email'
                  value={signform.email}
                  className='bg-gray-100 outline-none rounded p-2 indent-4'
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col gap-y-1'>
                <label className='font-bold' htmlFor="password">Password</label>
                <input
                  autoComplete='on'
                  required
                  type="password"
                  id='password'
                  name='password'
                  placeholder='6+ characters'
                  value={signform.password}
                  className='bg-gray-100 outline-none rounded p-2 w-auto indent-4'
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className='flex gap-x-3 w-[92%]'>
              <input
                type="checkbox"
                autoComplete='on'
                required
                className='p-2 h-10 w-10'
                checked={signform.isChecked}
                name='isChecked'
                onChange={handleChange}
              />
              <p className='mt-2 leading-tight text-[14px]' >Creating an account means you're okay with our Terms of Service. Privacy Policy. and our defalult Notification Settings.</p>
            </div>

            <div>
              <button  onClick={Navigation} className='px-8 py-2 bg-pink-500 text-white font-bold rounded' >Create Account</button>
            </div>

            <div className='w-[70%] text-gray-400'><p className='text-xs' >This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p></div>

          </div>

        </form>

        {/* <button onClick={toggle} className='p-1 bg-blue-600 text-white'>Next Step</button> */}
      </div>
    </>
  )
}

export default Home