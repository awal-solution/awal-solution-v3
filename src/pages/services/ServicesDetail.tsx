import { CircleCheck, Minus, Plus } from 'lucide-react';
import { HeroSection } from '@src/components/heroSection/Herosection';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { AccordionPanel, AccordionTitle } from '@src/components/ui';
import { Env } from '@src/constants/environments';
import { getRecordsApi } from '@src/api/enpoints';

const { imgUrl } = Env;

const ServicesDetailContent = ({ data }: any) => {
  return (
    <div className='pt-20'>
      <img
        className='mb-5 h-[300px] w-full rounded-3xl lg:h-[500px]'
        src={imgUrl + data?.thumbnail}
        alt='image'
      />
      <h2 className='py-5 font-serif text-2xl font-bold text-[#020842] lg:text-5xl'>
        {data?.sub_title}
      </h2>
      <div className='mb-1'>
        <p className='font-serif text-lg font-medium tracking-wide text-[#49515B]'>
          {data?.description}
        </p>
      </div>
    </div>
  );
};
const ServicesProcess = ({ data }: any) => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? 0 : id));
  };

  return (
    <>
      <h1 className='py-8 text-5xl font-bold'>Services Process</h1>
      <div className='flex flex-col items-center gap-10 md:flex-row'>
        <div className='w-full md:w-1/2'>
          {data?.process?.map((item: any, index: any) => {
            const isOpen = activeId === item.id;
            return (
              <Fragment key={item.id}>
                <AccordionTitle
                  id={item.id}
                  handleToggle={handleToggle}
                  className='flex justify-between border-b border-[#CCE3FF] py-4 text-xl font-bold capitalize hover:text-[#0044EB]'
                >
                  0{index + 1}. {item.title}
                  {isOpen ? <Minus /> : <Plus />}
                </AccordionTitle>
                <AccordionPanel isOpen={activeId === item.id} className='bg-[#CCE3FF] p-5'>
                  {item.description}
                </AccordionPanel>
              </Fragment>
            );
          })}
        </div>
        <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
          {data?.process?.map((item: any) => {
            return (
              <button
                onClick={() => handleToggle(item.id)}
                key={item.id}
                className={`-mb-5 h-32 w-[300px] rounded-[100%] text-2xl capitalize md:w-[450px] ${
                  activeId === item.id
                    ? 'z-30 bg-[#0044EB] text-white'
                    : 'z-10 border border-[#020842] bg-transparent text-[#020842]'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ServicesOutcome = ({ data }: any) => {
  const { imgUrl } = Env;
  return (
    <>
      <div className='mt-10'>
        <h2 className='pb-10 font-serif text-2xl font-bold text-[#020842] lg:text-5xl'>
          Services Outcome
        </h2>
        <p className='text-lg leading-8'>{data?.outcome_description}</p>
        <div className='grid grid-cols-1 pt-10 md:grid-cols-2'>
          {data?.outcomes?.map((item: any, index: number) => {
            return (
              <div key={index} className='mb-2 flex items-center gap-1 text-lg capitalize'>
                <CircleCheck color='blue' />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5 py-9'>
        {data?.images?.map((item: any, index: number) => {
          return (
            <img
              key={index}
              className='col-span-3 size-full lg:col-span-1'
              src={imgUrl + item.url}
              alt='image'
            />
          );
        })}
      </div>
    </>
  );
};

export const ServicesDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    getRecordsApi('/services', { slug: slug }).then((res: any) => {
      if (res?.data === null) {
        navigate('/not-found');
      } else {
        setData(res?.data);
      }
    });
  }, [slug, navigate]);

  return (
    <div className='bg-[#E3F0FF]'>
      <HeroSection heading={data?.title} subHeading='Services 😍' />
      <div className='mx-auto max-w-screen-xl px-5'>
        <ServicesDetailContent data={data} />
        <ServicesProcess data={data} />
        <ServicesOutcome data={data} />
      </div>
    </div>
  );
};
