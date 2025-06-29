import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTimes,
  FaCheck,
  FaMapMarker,
} from 'react-icons/fa';
import PropertyMap from '@/components/PropertyMap';
import nl2br from 'react-nl2br';

const PropertyDetails = ({ property }) => {
  const types = {
    T1: '住宅',
    T2: '工商',
    T3: '店舖',
  }
  const amenities = {
    amenity_1  : 'Wifi',
    amenity_2  : '冷氣機',
    amenity_3  : '熱水爐',
    amenity_4  : '洗衣機',
    amenity_5  : '雪櫃',
    amenity_6  : '床',
    amenity_7  : '連傢俬',
    amenity_8  : '連電器',
    amenity_9  : '望市景',
    amenity_10 : '望山景',
    amenity_11 : '雅緻裝修',
    amenity_12 : '優質校網',
    amenity_13 : '近大型商場',
    amenity_14 : '近地鐵站',
    amenity_15 : '單位特色',
  }

  return (
    <main>
      <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
        <div className='text-gray-500 mb-4'>{types[property.type]}</div>
        <h1 className='text-3xl font-bold mb-4'>{property.name}</h1>
        <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
          <FaMapMarker className='text-orange-700 mt-1 mr-1' />
          <p className='text-orange-700'>
            {property.location.district}{property.location.street}{property.location.building}
          </p>
        </div>

        <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
          租盤詳細
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>樓齡</div>
            <div className='text-2xl font-bold text-blue-500'>
              {`${property.age}年`}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>租金</div>
            <div className='text-2xl font-bold text-blue-500'>
                {`每月 $${property.rent.toLocaleString()}`}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>已包差餉地租</div>
            <div className='text-2xl font-bold text-blue-500'>
              {property.rate == 1 ? (
                <FaCheck className='text-green-700' />
              ) : (
                <FaTimes className='text-red-700' />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>其他描述</h3>
        <div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
          <p>
            <FaBed className='inline-block mr-2' /> {property.rooms}{' '}
            <span className='hidden sm:inline'>房間</span>
          </p>
          <p>
            <FaBath className='inline-block mr-2' /> {property.baths}{' '}
            <span className='hidden sm:inline'>浴室</span>
          </p>
          <p>
            <FaRulerCombined className='inline-block mr-2' />
            {property.square_feet}{' '}
            <span className='hidden sm:inline'>平方呎</span>
          </p>
        </div>
        <p className='text-gray-500 mb-4'>{nl2br(property.description)}</p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>便利設施</h3>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2'>
          {property.amenities.map((amenity, index) => (
              <li key={index} className='mt-[8px]'>
                <FaCheck className='inline-block text-green-600 mr-2' /> {amenities[amenity]}
              </li>
              // <li key={index}>
              //   <FaCheck className='inline-block text-green-600 mr-2' /> {amenities[amenity]}
              // </li>
          ))}
        </ul>
      </div>
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <PropertyMap property={property} />
      </div>
    </main>
  );
};

export default PropertyDetails;