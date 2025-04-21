import React from 'react'
import RegisterForm from '../../components/authComponent/RegisterForm'
import pic from '../../assets/AngkorWat 1.png'
const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7f5] px-4 py-16">
      <div className="flex w-full max-w-6xl rounded-xl overflow-hidden bg-white h-[700px]">
        
      
        <div className="w-1/2 hidden md:block">
          <img 
            className="h-full w-full object-cover" 
            src={pic}
          />
        </div>
        <div className="w-full md:w-1/2 p-10 flex items-center justify-center bg-[#fff7f5] h-full">
          <RegisterForm />
        </div>

      </div>
    </div>
  )
}

export default Register
