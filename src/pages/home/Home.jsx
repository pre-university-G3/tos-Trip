
import Hero from '../../components/layouts/banner/Hero';
import { CardPlace } from '../../components/places/CardPlace';
import PopularPlaces from '../../components/places/PopularPlaces';
import TitleHomepage from '../../components/Title/TitleHomepage';

const Home = () => {

  return (
    <div className="mx-auto max-w-screen-2xl md:px-[7%] px-4 py-8 font-[Suwannaphum]">
      <div className='mb-10'>
        <Hero />
      </div>
      <section className='m-8'>
        <TitleHomepage title="ដំណើរទេសចរណ៍ដ៏ប្រជាប្រិយប្រចាំប្រទេសរបស់យើង" />
        <PopularPlaces />
        <TitleHomepage title="៦កន្លែង មានទេសភាពស្អាតបំផុតនៅរដូវវស្សា" />
        {/* <CardPlace /> */}
        <div className="grid grid-cols-1 gap-4 ">
         <CardPlace />
        </div>
      </section>
    </div>
  );
}

export default Home;
