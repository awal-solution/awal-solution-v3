import { CircleCheck } from 'lucide-react';
import { HeroSection } from '@src/components/heroSection/Herosection';
import { useEffect, useState } from 'react';
import { getRecordApi } from '@src/api/enpoints';
import { useParams } from 'react-router-dom';
import { Env } from '@src/constants/environments';

export const SingleProject = () => {
  const { imgUrl } = Env;
  const { projectId } = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    getRecordApi(`/project/${projectId}`).then((res) => {
      setData(res?.data);
    });
  }, [projectId]);

  return (
    <>
      <HeroSection heading={data?.title} subHeading={data?.sub_title} />
      <div className='md:px-18 bg-[#E3F0ff] px-4 pb-4 sm:px-10 lg:px-20'>
        <div>
          <div className='pt-5 lg:pt-24  '>
            <img
              className='rounded-2xl'
              src={imgUrl + data?.thumbnail}
              alt={' '}
            />
          </div>
          <h1 className='pt-10 text-4xl font-bold'>
            Network Infrastructure and Design
          </h1>
          <p className='pt-10 text-lg leading-8'>
            The "Cloud Migration and Integration Project" represents a pivotal
            step for our client's digital transformation journey. By
            transitioning from traditional on-premises infrastructure to
            cloud-based solutions, we are unlocking a world of possibilities,
            from scalability and flexibility to enhanced security and cost
            efficiency. Our meticulous planning and execution ensure a smooth
            migration process, with minimal disruption to business operations.
            From assessing the current environment to preparing the
            infrastructure, migrating data and applications.
          </p>
          <p className='pt-10 text-lg leading-8'>
            providing comprehensive training and support, we leave no stone
            unturned in ensuring the success of this project. With our expertise
            and dedication, we empower our client to embrace the full potential
            of cloud computing, driving innovation.
          </p>
          <div className='p-10'>
            <hr className='bg-gray-500' />
          </div>
          <div className='flex flex-col justify-between sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between'>
            <div className='flex gap-1 text-lg'>
              <span className='font-bold'>Services:</span>
              <p>Cloud Migration</p>
            </div>
            <div className='flex gap-1 text-lg'>
              <span className='font-bold'>Client:</span>
              <p>Techco</p>
            </div>
            <div className='flex gap-1 text-lg'>
              <span className='font-bold'>Location:</span>
              <p>New York,NY,USA</p>
            </div>
            <div className='flex gap-1 text-lg'>
              <span className='font-bold'>Completed Date:</span>
              <p>20-12-2024</p>
            </div>
          </div>
          <div>
            <h1 className='pt-5 text-4xl font-bold'>Project Requirement</h1>
            <p className='pt-5 text-lg leading-8'>
              In this phase of the Cloud Migration and Integration project, our
              focus is on executing robust data migration strategies to ensure
              the seamless transfer of data from on-premises servers to cloud
              storage solutions. Leveraging advanced techniques and tools,
            </p>
            <div className='grid grid-cols-1 pt-10 md:grid-cols-2'>
              <div>
                <div className='flex items-center gap-1 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Comprehensive Assessment Phase</p>
                </div>
                <div className='flex items-center gap-1 pt-3 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Strategic Migration Plan Development</p>
                </div>
                <div className='flex items-center gap-1 pt-3 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Robust Data Migration Strategies</p>
                </div>
                <div className='flex items-center gap-1 pt-3 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Infrastructure Preparation</p>
                </div>
              </div>
              <div className='pt-3 md:pt-0'>
                <div className='flex items-center gap-1 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Application Migration</p>
                </div>
                <div className='flex items-center gap-1 pt-3 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Training and Documentation</p>
                </div>
                <div className='flex items-center gap-1 pt-3 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Infrastructure Preparation</p>
                </div>
                <div className='flex items-center gap-1 pt-3 text-lg'>
                  <CircleCheck color='blue' />
                  <p>Post-migration Support</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className='pt-5 text-4xl font-bold'>Solution & Result</h1>
              <p className='pt-5 text-lg leading-8'>
                The successful execution of robust data migration strategies
                ensures the seamless transfer of data from on-premises servers
                to cloud storage solutions. Data integrity, security, and
                regulatory compliance are prioritized throughout the migration
                process. Rigorous testing and validation verify the accuracy and
                completeness of data migration, minimizing downtime and data
                loss risks.
              </p>
              <p className='pt-5 text-lg leading-8'>
                To achieve successful data migration, our solution includes a
                comprehensive approach that encompasses meticulous planning,
                advanced techniques, and thorough testing. We leverage
                industry-leading tools and expertise.
              </p>
            </div>
            <h1 className='pt-5 text-4xl font-bold'>Our Similar Projects</h1>
          </div>
        </div>
      </div>
    </>
  );
};
