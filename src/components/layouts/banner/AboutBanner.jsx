import React from 'react'

import hero2 from '../../../assets/hero2.png';
import banner from"../../../assets/banner_page_about.png";
const AboutBanner = () => {

    return (
      <div className='bg-gray-10'>
      
     
        <div className=' p-20'>
          <div className='grid grid-cols-2 gap-12'>
          <div>
            <img src={banner} alt="leftImage" className=' w-full h-full object-cover rounded-lg' style={{ width: '662px', height: '467px' }} />
           
            </div>
            <div className='flex flex-col  font-[Suwannaphum]'>
            <h1 className="text-5xl font-bold text-gray-900 ml-2 ">អំពីតោះ<span className=" margin-3 text-orange-400 ml-3">Trip</span></h1>
                    <h2 className="text-xl text-orange-400 mt-12">ស្វាគមន៍មកកាន់</h2>
                    <p class="text-gray-600 mt-8 leading-relaxed ">
                        ពេល Trip ជាការរីករាយបំផុតសម្រាប់ការធ្វើដំណើរទៅកាន់កន្លែងអស្ចារ្យនានា! 
                        ជាសំណាងដែលយើងអាចរីករាយនឹងបរិស្ថានដ៏ស្រស់ស្អាតនិងវប្បធម៌កម្ពុជាដ៏មានអត្ថន័យ។
                        បទពិសោធន៍នៃការធ្វើដំណើរនឹងទស្សនាទេសភាពពិតជាប្លែកអស្ចារ្យ។
                    </p></div>
          </div>
        
      
    </div>
    </div>
    
   

   

    );
  }
  

  
 

  





export default AboutBanner;