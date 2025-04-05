import React from 'react';
import hero2 from '../../../assets/hero2.png';

const AboutBanner = () => {
  return (
    <div className="px-4 md:px-[8%]">
      <div className="bg-bg-Snow py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={hero2}
              alt="Team"
              className="w-full h-auto object-cover rounded-lg max-w-full"
            />
          </div>

          <div className="flex flex-col items-center md:items-start pt-6 md:pt-5">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-heade  ">
              អំពីតោះ
              <span className="text-Primary ml-2   ">Trip</span>
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl text-Primary mt-4 md:mt-6">
              ស្វាគមន៍មកកាន់ <span className="text-heade font-bold">តោះ​ Trip</span>
            </h2>
            <p className="text-Secondary mt-4 md:mt-6 leading-relaxed text-sm md:text-base lg:text-lg text-center md:text-left max-w-2xl">
              ជាទីតាំងបង្ហាញនូវភាពរីករាយនៃការធ្វើដំណើរ!<br />
              ជាមួយ Trip អ្នកនឹងមានបទពិសោធន៍ដ៏អស្ចារ្យក្នុងការស្វែងរកកន្លែងទេសចរណ៍គួរឱ្យទាក់ទាញនៅកម្ពុជា។<br />
              រីករាយជាមួយធម្មជាតិដ៏ស្រស់ស្អាត ប្លែកភ្នែកនឹងវប្បធម៌ជាតិដ៏សម្បូរបែប។<br />
              ចាប់ផ្តើមដំណើររបស់អ្នកថ្ងៃនេះជាមួយ Trip!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
