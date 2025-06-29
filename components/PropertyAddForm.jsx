'use client';
import addProperty from '@/app/actions/addProperty';

const PropertyAddForm = () => {
  return (
    <form action={addProperty}>
      <h2 className='text-3xl text-center font-semibold mb-6'>新增租盤</h2>

      <div className='mb-4'>
        <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
          租盤類別
        </label>
        <select
          id='type'
          name='type'
          className='border rounded w-full py-2 px-3'
          required
        >
          <option value='T1'>住宅</option>
          <option value='T2'>工商</option>
          <option value='T3'>舖位</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2'>
          顯示名稱
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='請輸入顯示名稱, 例: 西半山 麗豪閣'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='description'
          className='block text-gray-700 font-bold mb-2'
        >
          描述
        </label>
        <textarea
          id='description'
          name='description'
          className='border rounded w-full py-2 px-3'
          rows='4'
          placeholder='描述租盤 (可選填)'
        ></textarea>
      </div>

      <div className='mb-4 bg-blue-50 p-4'>
        <label className='block text-gray-700 font-bold mb-2'>地點</label>
        <input
          type='text'
          id='district'
          name='location.district'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='地區'
          required
        />
        <input
          type='text'
          id='street'
          name='location.street'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='街道'
          required
        />
        <input
          type='text'
          id='building'
          name='location.building'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='大廈名稱'
        />
      </div>

      <div className='mb-4 flex flex-wrap'>
        <div className='w-full sm:w-1/3 pr-2'>
          <label htmlFor='rooms' className='block text-gray-700 font-bold mb-2'>
            房間
          </label>
          <input
            type='number'
            id='rooms'
            name='rooms'
            className='border rounded w-full py-2 px-3'
            required
          />
        </div>
        <div className='w-full sm:w-1/3 px-2'>
          <label htmlFor='baths' className='block text-gray-700 font-bold mb-2'>
            浴室
          </label>
          <input
            type='number'
            id='baths'
            name='baths'
            className='border rounded w-full py-2 px-3'
            required
          />
        </div>
        <div className='w-full sm:w-1/3 pl-2'>
          <label
            htmlFor='square_feet'
            className='block text-gray-700 font-bold mb-2'
          >
            平方呎
          </label>
          <input
            type='number'
            id='square_feet'
            name='square_feet'
            className='border rounded w-full py-2 px-3'
            required
          />
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2'>便利設施</label>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <div>
            <input
              type='checkbox'
              id='amenity_1'
              name='amenities'
              value='amenity_1'
              className='mr-2'
            />
            <label htmlFor='amenity_1'>Wifi</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_2'
              name='amenities'
              value='amenity_2'
              className='mr-2'
            />
            <label htmlFor='amenity_2'>冷氣機</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_3'
              name='amenities'
              value='amenity_3'
              className='mr-2'
            />
            <label htmlFor='amenity_3'>熱水爐</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_4'
              name='amenities'
              value='amenity_4'
              className='mr-2'
            />
            <label htmlFor='amenity_4'>洗衣機</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_5'
              name='amenities'
              value='amenity_5'
              className='mr-2'
            />
            <label htmlFor='amenity_5'>雪櫃</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_6'
              name='amenities'
              value='amenity_6'
              className='mr-2'
            />
            <label htmlFor='amenity_6'>床</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_7'
              name='amenities'
              value='amenity_7'
              className='mr-2'
            />
            <label htmlFor='amenity_7'>連傢俬</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_8'
              name='amenities'
              value='amenity_8'
              className='mr-2'
            />
            <label htmlFor='amenity_8'>
              連電器
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_9'
              name='amenities'
              value='amenity_9'
              className='mr-2'
            />
            <label htmlFor='amenity_9'>望市景</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_10'
              name='amenities'
              value='amenity_10'
              className='mr-2'
            />
            <label htmlFor='amenity_10'>望山景</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_11'
              name='amenities'
              value='amenity_11'
              className='mr-2'
            />
            <label htmlFor='amenity_11'>
              雅緻裝修
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_12'
              name='amenities'
              value='amenity_12'
              className='mr-2'
            />
            <label htmlFor='amenity_12'>優質校網</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_13'
              name='amenities'
              value='amenity_13'
              className='mr-2'
            />
            <label htmlFor='amenity_13'>近大型商場</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_14'
              name='amenities'
              value='amenity_14'
              className='mr-2'
            />
            <label htmlFor='amenity_14'>近地鐵站</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_15'
              name='amenities'
              value='amenity_15'
              className='mr-2'
            />
            <label htmlFor='amenity_15'>單位特色</label>
          </div>
        </div>
      </div>

      <div className='mb-4 bg-blue-50 p-4'>
        <label className='block text-gray-700 font-bold mb-2'>
          租盤詳細
        </label>
        <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
          <div className='flex items-center text-nowrap'>
            <label htmlFor='age' className='mr-2'>
              樓齡(年)
            </label>
            <input
              type='number'
              id='age'
              name='age'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='flex items-center text-nowrap'>
            <label htmlFor='rent' className='mr-2'>
              租金
            </label>
            <input
              type='number'
              id='rent'
              name='rent'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div className='flex items-center text-nowrap'>
            <label htmlFor='rate' className='mr-2'>
              已包差餉地租
            </label>
            <input
              type='checkbox'
              value='1'
              id='rate'
              name='rate'
              className='border rounded w-full py-2 px-3'
            />
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='seller_name'
          className='block text-gray-700 font-bold mb-2'
        >
          賣家名稱
        </label>
        <input
          type='text'
          id='seller_name'
          name='seller_info.name'
          className='border rounded w-full py-2 px-3'
          placeholder='名稱'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='seller_email'
          className='block text-gray-700 font-bold mb-2'
        >
          賣家電郵
        </label>
        <input
          type='email'
          id='seller_email'
          name='seller_info.email'
          className='border rounded w-full py-2 px-3'
          placeholder='電郵地址'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='seller_phone'
          className='block text-gray-700 font-bold mb-2'
        >
          賣家電話
        </label>
        <input
          type='tel'
          id='seller_phone'
          name='seller_info.phone'
          className='border rounded w-full py-2 px-3'
          placeholder='電話號碼'
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='images' className='block text-gray-700 font-bold mb-2'>
          圖片 (最多4張)
        </label>
        <input
          type='file'
          id='images'
          name='images'
          className='border rounded w-full py-2 px-3'
          accept='image/*'
          multiple
          required
        />
      </div>

      <div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
          type='submit'
        >
          新增租盤
        </button>
      </div>
    </form>
  );
};

export default PropertyAddForm;