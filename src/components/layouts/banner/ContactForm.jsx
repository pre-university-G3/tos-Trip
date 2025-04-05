import React from 'react';
import hero2 from '../../../assets/hero2.png';

const ContactForm = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6 mt-20">
            {/* Left Side - Illustration */}
            <div className="md:w-1/2 flex justify-center">
                <img 
                    src={hero2}
                    alt="Illustration" 
                    className="w-full max-w-md"
                />
            </div>
            
            {/* Right Side - Form */}
            <div className="md:w-1/2 max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-6 text-center">
                    ទំនាក់ទំនងមកកាន់យើង
                </h2>
                
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">ឈ្មោះ</label>
                        <input 
                            type="text" 
                            placeholder="ឈ្មោះ" 
                            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">អាសយដ្ឋានអ៊ីមែល</label>
                        <input 
                            type="email" 
                            placeholder="អាសយដ្ឋានអ៊ីមែល" 
                            className="w-full border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">សារ</label>
                        <textarea 
                            placeholder="សារ" 
                            className="w-full border border-orange-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        ></textarea>
                    </div>
                    <div className='flex justify-center'>
                    <button 
    type="submit" 
    className="w-[200px] h-[50px] bg-orange-400 text-white rounded-lg   justify-center items-center font-medium hover:bg-orange-300 transition"
>
    បញ្ជូន
</button>
</div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;