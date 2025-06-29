import Link from 'next/link';
import Image from 'next/image';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa';

const FeaturedPropertyCard = ({ property }) => {
  const getRentDisplay = () => {
    const { rent } = property;

    return `租 $${rent.toLocaleString()}`;
  }

  const types = {
    T1: '住宅',
    T2: '工商',
    T3: '店舖',
  }
  // const getRateDisplay = () => {
  //   const { rates } = property;

  //   if (rates.monthly) {
  //     return `${rates.monthly.toLocaleString()}/mo`;
  //   } else if (rates.weekly) {
  //     return `${rates.weekly.toLocaleString()}/wk`;
  //   } else if (rates.nightly) {
  //     return `${rates.nightly.toLocaleString()}/night`;
  //   }
  // };

  return (
    // <div className='bg-white rounded-xl shadow-md relative flex flex-col md:flex-row overflow-y-hidden h-[200px]'>
    <div className='bg-white rounded-xl shadow-md relative flex flex-col md:flex-row'>

      <Image
        src={property.images[0]}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        // className='object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5 relative top-[50%] translate-y-[-50%]'
        className='object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5 max-h-[250px]'
      />
      <div className='p-6 grow flex-col'>
        <h3 className='text-xl font-bold'>{property.name}</h3>
        <div className='text-gray-600 mb-4'>{types[property.type]}</div>
        <h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          {getRentDisplay()}
        </h3>
        <div className='flex justify-center gap-4 text-gray-500 mb-4'>
          <p>
            <FaBed className='inline-block mr-2' /> {property.rooms}{' '}
            <span className='md:hidden lg:inline'>房間</span>
          </p>
          <p>
            <FaBath className='inline-block mr-2' /> {property.baths}{' '}
            <span className='md:hidden lg:inline'>浴室</span>
          </p>
          <p>
            <FaRulerCombined className='inline-block mr-2' />
            {property.square_feet}{' '}
            <span className='md:hidden lg:inline'>平方呎</span>
          </p>
        </div>

        {/* <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Nightly
            </p>
          )}

          {property.rates.weekly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Weekly
            </p>
          )}

          {property.rates.monthly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Monthly
            </p>
          )}
        </div> */}

        <div className='border border-gray-200 mb-5'></div>

        <div className='flex grow lg:flex-row justify-between'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <FaMapMarker className='text-lg text-orange-700' />
            <span className='text-orange-700'>
              {' '}
              {property.location.district}{property.location.street}{property.location.building}
            </span>
          </div>
        </div>

        <div className="text-right">
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            詳細
          </Link>
          </div>

      </div>
    </div>
  );
};
export default FeaturedPropertyCard;