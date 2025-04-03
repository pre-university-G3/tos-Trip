import React from 'react'
import hero2 from '../../../assets/hero2.png';
const AboutMentor= ()=> {
    return (
        <div className='p-10 flex flex-col items-center text-center font-[Suwannaphum]'>
            
            <h1 className="text-4xl  text-orange-400 mb-12">អ្នកណែនាំរបស់យើង</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl ">
                <div className="relative rounded-lg overflow-hidden">
                    <img src={hero2} alt="គីម តារីសុធេង" className="w-full h-80 object-cover" />
                    <div className="absolute bottom-0 bg-black-100 bg-opacity-50 text-white w-full text-center p-2">
                        <p className="text-xl font-bold mt-10">គីម ចាន់សុផេង</p>
                        <p className="text-sm mt-8">Mentor</p>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img src={hero2} alt="អ៊ីន លីហ្គា" className="w-full h-80 object-cover" />
                    <div className="absolute bottom-0 bg-black-100 bg-opacity-50 text-white w-full text-center p-2">
                        <p className="text-xl font-bold mt-10">អ៊ីន លីហ្គា</p>
                        <p className="text-sm mt-8">Mentor</p>
                        
                    </div>
                    
                </div>
                <p className="mt-5 "> <span className='text-orange-400'>Tell:</span> 08888888888</p>
                <p className="mt-5"> <span  className='text-orange-400'>Tell:</span>08888888888</p>
            </div>
            </div>
           
        
        )
}

export default AboutMentor;