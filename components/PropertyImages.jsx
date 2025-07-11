'use client';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PropertyImages = ({ images, type }) => {
  let image_w = '0';
  let image_h = '0';

  if (type == 'T2') {
    image_w = '1000';
    image_h = '750';
  } else {
    image_w = '600';
    image_h = '800';
  }

  return (
    <Gallery>
      <section className='bg-blue-50 p-4'>
        <div className='container mx-auto'>
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width={image_w}
              height={image_h}
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={images[0]}
                  alt=''
                  className='object-cover h-[400px] mx-auto rounded-xl'
                  width={1800}
                  height={400}
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className='grid grid-cols-2 gap-4'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`
                  ${
                    images.length === 3 && index === 2
                      ? 'col-span-2'
                      : 'col-span-1'
                  }
                `}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width={image_w}
                    height={image_h}
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={image}
                        alt=''
                        className='object-cover h-[400px] w-full rounded-xl cursor-pointer'
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
};
export default PropertyImages;