
import MapPlace from '../../components/map/MapPlace';
import MainDetailPlace from '../../components/places/MainDetailPlace';
import ReviewForm from '../../components/rating/ReviewForm';
import { ReviewGetData } from '../../components/rating/ReviewGetData';

const PlaceDetailPage = () => {
return (
    <main>
       <section className='px-[8%]'>
        <MainDetailPlace />
      </section>
      <section className='px-[8%]'><MapPlace /></section>
      <section className="flex flex-col md:flex-row items-center justify-center w-full px-4 bg-Snow sm:px-[8%] py-10 gap-10">
        <div className="w-full md:w-1/2 flex justify-start items-start">
          <ReviewGetData />
        </div>
        <div className="w-full md:w-1/3">
          <ReviewForm />
        </div>
      </section>
    </main>
  );
};

export default PlaceDetailPage;
