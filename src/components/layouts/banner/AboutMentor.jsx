import React from 'react';
import hero2 from '../../../assets/hero2.png';

const AboutMentor = () => {
  return (
    <section className="px-4 py-10 md:px-10 flex flex-col items-center text-center font-[Suwannaphum]">
      <h1 className="text-4xl md:text-5xl  text-Primary  mb-10 md:mb-12">
        អ្នកណែនាំរបស់យើង
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Mentor Card 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={hero2}
            alt="គីម តារីសុធេង"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 bg-black/50  text-white w-full text-center p-4">
            <p className="text-lg md:text-xl font-bold">គីម ចាន់សុផេង</p>
            <p className="text-sm mt-2">Mentor</p>
          </div>
        </div>

        {/* Mentor Card 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={hero2}
            alt="អ៊ឹង លីហ៊្សា"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 bg-black/50  text-white w-full text-center p-4">
            <p className="text-lg md:text-xl font-bold">អ៊ឹង លីហ៊្សា</p>
            <p className="text-sm mt-2">Mentor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentor;
