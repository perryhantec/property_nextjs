'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import deleteProperty from '@/app/actions/deleteProperty';

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      '確認刪除此租盤?'
    );

    if (!confirmed) return;

    const deletePropertyById = deleteProperty.bind(null, propertyId);

    await deletePropertyById();

    toast.success('租盤已刪除');

    const updatedProperties = properties.filter(
      (property) => property._id !== propertyId
    );

    setProperties(updatedProperties);
  };

  return properties.map((property) => (
    <div key={property._id} className='mb-10'>
      <Link href={`/properties/${property._id}`}>
        <Image
          className='h-32 w-full rounded-md object-cover'
          src={property.images[0]}
          alt=''
          width={500}
          height={100}
          priority={true}
        />
      </Link>
      <div className='mt-2'>
        <p className='text-lg font-semibold'>{property.name}</p>
        <p className='text-gray-600'>
          地點: {property.location.district}{property.location.street}{property.location.building}
        </p>
      </div>
      <div className='mt-2'>
        <Link
          href={`/properties/${property._id}/edit`}
          className='bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
        >
          更新
        </Link>
        <button
          onClick={() => handleDeleteProperty(property._id)}
          className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600'
          type='button'
        >
          刪除
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;