import video_1 from '../../assets/aboutbanner.jpg'
import {Link} from 'react-router-dom'

const Details = () => {
   return (
      <div className='flex items-center justify-between flex-col sm:flex-row my-20 gap-y-8'>
         <div className='basis-[45%]'>
            <img src={video_1} className='w-full rounded-xl'/>
         </div>
         <div className='basis-[50%] space-y-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold font-serif'><span className='text-[#960bd2]'>Car - Hire</span></h1>
            <p className='sm:text-xl font-light'>Big Day Taxi is a locally owned and operated taxi service that has been serving the community since 2010. We are committed to providing our customers with safe, reliable, and affordable transportation. Our fleet of new, clean, and comfortable vehicles is equipped with GPS . Our professional and experienced drivers are background checked and insured. We are proud to be a part of the community and we are committed to providing our customers with the best possible service. We offer a variety of services, including point-to-point transportation, airport transfers, weddings and events, corporate transportation, and tours and sightseeing. We are also available 24 hours a day, 7 days a week.</p>
            <h2 className='text-xl sm:text-3xl font-semibold text-[#8a54ed]'>+91-8881815984</h2>
            <Link to='/' className='btn inline-block'>Get a Car</Link>
         </div>
      </div>
   );
};

export default Details;