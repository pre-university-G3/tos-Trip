
import Hero from '../../components/layouts/banner/Hero';
import { CardPlace } from '../../components/places/CardPlace';

const Home = () => {
  
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 font-[Suwannaphum]">
      <div className='mb-10'>
        <Hero />
      </div>
      <section className='m-8'>
        <div className='text-center p-10  '>
          <div className='text-center flex justify-between items-center'>
          <h2 className='text-3xl'>ដំណើរទេសចរណ៍ដ៏ប្រជាប្រិយប្រចាំប្រទេសរបស់យើង</h2>
          <p className='bg-Primary text-lg px-10 py-2 rounded text-white'>រុករក</p>
          </div>
        </div>
        <CardPlace />
       
      </section>
    </div>
  );
}

export default Home;
