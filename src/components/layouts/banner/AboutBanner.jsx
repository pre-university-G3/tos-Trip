import React from 'react';
import hero2 from '../../../assets/hero2.png';
import team from '../../../assets/Menber/team.png'
const AboutBanner = () => {
  return (
    <div className="px-4 md:px-[8%]">
      <div className="bg-bg-Snow py-10 md:py-20">
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2  gap-20 ">
          <div className='bg-black/1'>
=======
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 items-center">


          <div className="flex flex-col items-center md:items-start pt-6 md:pt-5">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-heade  ">
              ស្វាគមន៍មកកាន់
              <span className="text-Primary ml-2   ">តោះ​Trip</span>
            </h1>

            <p className="text-Secondary mt-4 md:mt-6 leading-relaxed text-sm md:text-base lg:text-xl text-center md:text-left max-w-2xl   ">

              ជាមួយ តោះ​​Trip អ្នកនឹងមានបទពិសោធន៍ដ៏អស្ចារ្យក្នុងការស្វែងរកកន្លែងទេសចរណ៍គួរឱ្យទាក់ទាញនៅកម្ពុជា។
              រីករាយជាមួយធម្មជាតិដ៏ស្រស់ស្អាត ប្លែកភ្នែកនឹងវប្បធម៌ជាតិដ៏សម្បូរបែប។
              ចាប់ផ្តើមដំណើររបស់អ្នកថ្ងៃនេះជាមួយ តោះ​Trip!
            </p>
          </div>
          <div className='bg-black/20'>
>>>>>>> development
            <img
              src={team}
              alt="Team"
              className="w-full brightness-80 h-auto object-cover rounded-lg  max-w-full"
            />
          </div>
<<<<<<< HEAD

          <div className="flex flex-col md:items-start">
            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-heade mb-5">
              អំពីតោះ
              <span className="text-Primary ml-2 ">Trip</span>
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-4xl text-Primary mt-2 md:mt-2">
              ស្វាគមន៍មកកាន់ <span className="text-heade font-bold ">តោះ​ Trip</span>
            </h2>
            <p className="text-Secondary mt-6  md:mt-6 leading-relaxed text-sm md:text-base lg:text-lg text-center md:text-left max-w-2xl">
              ជាទីតាំងបង្ហាញនូវភាពរីករាយនៃការធ្វើដំណើរ!<br />
              ជាមួយ Trip អ្នកនឹងមានបទពិសោធន៍ដ៏អស្ចារ្យក្នុងការស្វែងរកកន្លែងទេសចរណ៍គួរឱ្យទាក់ទាញនៅកម្ពុជា។<br />
              រីករាយជាមួយធម្មជាតិដ៏ស្រស់ស្អាត ប្លែកភ្នែកនឹងវប្បធម៌ជាតិដ៏សម្បូរបែប។<br />
              ចាប់ផ្តើមដំណើររបស់អ្នកថ្ងៃនេះជាមួយ Trip!
            </p>
          </div>
=======
>>>>>>> development
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
