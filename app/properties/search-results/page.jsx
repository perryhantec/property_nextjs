import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializeableObject } from '@/utils/convertToObject';

const SearchResultsPage = async ({
  searchParams: { location, propertyType },
}) => {
  await connectDB();

  const locationPattern = new RegExp(location, 'i');

  // Match location pattern against database fields
  let query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { 'location.district': locationPattern },
      { 'location.street': locationPattern },
      { 'location.building': locationPattern },
    ],
  };

  // Only check for property if its not 'All'
  if (propertyType && propertyType !== 'All') {
    // const typePattern = new RegExp(propertyType, 'i');
    // query.type = typePattern;
    query.type = propertyType;
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = propertiesQueryResults.map(convertToSerializeableObject);

  return (
    <>
      <section className='bg-slate-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Link
            href='/properties'
            className='flex items-center text-blue-500 hover:underline mb-3'
          >
            <FaArrowAltCircleLeft className='mr-2 mb-1' /> 回到租盤頁
          </Link>
          <h1 className='text-2xl mb-4'>搜尋結果</h1>
          {properties.length === 0 ? (
            <p>找不到結果</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default SearchResultsPage;