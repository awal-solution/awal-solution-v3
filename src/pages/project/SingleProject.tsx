import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { getRecordApi, getRecordsApi } from '@src/api/enpoints';
import { Env } from '@src/constants/environments';
import { HeroSection } from '@src/components/heroSection/Herosection';

export const SingleProject = () => {
  const { imgUrl } = Env;
  const { slug } = useParams();
  const { state } = useLocation();
  const [data, setData] = useState<any>({});
  const [model, setModel] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    if (state === null) {
      getRecordsApi('/projects', { slug: slug }).then((res: any) => {
        setData(res?.data);
      });
    } else {
      getRecordApi(`/projects/${state?.id}`).then((res: any) => {
        setData(res?.data);
      });
    }
  }, [slug, state]);

  const handleClick = (imageUrl: string) => {
    setModel(true);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setModel(false);
    setSelectedImage(null);
  };

  return (
    <>
      <HeroSection heading={data?.title} subHeading='Portfolio 😍' />
      <div className='bg-[#E3F0ff] px-5 py-3 pt-20'>
        <div className='mx-auto max-w-screen-xl'>
          <div className=''>
            <Marquee pauseOnHover={true}>
              {data?.images?.map((item: any, index: number) => (
                <div className='mx-3 size-80' key={index}>
                  <img
                    src={imgUrl + item?.url}
                    alt='sample image for showcase'
                    className='size-full rounded-lg object-cover'
                    onClick={() => handleClick(imgUrl + item?.url)}
                  />
                  <div className={`${model ? 'block' : 'hidden'} fixed inset-0 size-full`}>
                    <img
                      src={imgUrl + item?.url}
                      alt='sample image for showcase'
                      className='size-full object-cover'
                    />
                  </div>
                </div>
              ))}
            </Marquee>
            {model && (
              <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
                <div className='relative h-4/5 w-full overflow-y-auto px-32'>
                  <img
                    src={selectedImage}
                    alt='image for showcase'
                    className='h-auto w-full object-cover'
                  />
                </div>
                <button
                  className='absolute right-32 top-32 m-3 rounded-full bg-black px-3 pb-1 pt-0.5 text-3xl text-white'
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
            )}
          </div>
          <h1 className='pt-10 text-4xl font-bold'>{data?.sub_title}</h1>
          <p className='pt-10 text-lg leading-8'>{data?.description}</p>
          <div className='my-5 flex flex-col justify-between border-y border-blue-300 py-2 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between'>
            <div className='flex gap-1 text-lg'>
              <span className='font-bold'>Services:</span>
              <p className='capitalize'>{data?.projectCategory?.name}</p>
            </div>
            <div className='flex gap-1 text-lg'>
              <span className='font-bold'>Client:</span>
              <p className='capitalize'>{data?.client_name}</p>
            </div>
            <div className='flex gap-1 text-lg'>
              <span className='font-bold'>Project Link:</span>
              <a className='text-blue-500' href={data?.project_link}>
                {data?.project_link}
              </a>
            </div>
          </div>
          <h1 className='pt-5 text-4xl font-bold'>Professionals Skills</h1>
          <div className='mt-5 grid grid-cols-2 gap-5  sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8'>
            {data?.skills?.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center gap-3 rounded-lg bg-white px-3 py-2'
                >
                  <img src={imgUrl + item.thumbnail} alt='image' className='size-16' />
                  <div>{item?.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
