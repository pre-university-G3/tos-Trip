import React from 'react';
import RegisterForm from '../../components/authComponent/RegisterForm';
import pic from '../../assets/authImage/Mobile login-rafiki.png';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 my-6">
      <div className="flex w-full max-w-6xl rounded-3xl shadow-lg overflow-hidden bg-white">
        {/* Left Side Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-[#ffe9e2] p-8">
          <img 
            src={pic} 
            alt="Register" 
            className="w-full h-auto max-h-[500px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>


        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#fff7f5] px-8">
          <div className="w-full max-w-md">
            
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
