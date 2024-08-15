import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const TeamDetail = () => {
  return (
    <div className='bg-[#E3F0FF] p-10'>
      <div className='mt-32 flex gap-28 rounded-3xl  bg-white p-6'>
        <div className='rounded-3xl bg-[#E3F0FF]'>
          <img
            className='h-[450px] w-[500px] object-contain'
            src='https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_3.webp'
            alt='Profile'
          />
        </div>
        <div>
          <h2 className='pt-16 text-4xl font-bold text-black'>
            August Everest
          </h2>
          <p className='pt-7  font-bold text-black'>
            Responsibility:{' '}
            <span className='font-normal'>Systems Engineer</span>
          </p>
          <p className='pt-7 font-bold text-black'>
            Experience: <span className='font-normal'>18 Years</span>
          </p>
          <p className='pt-7 font-bold text-black'>
            Email: <span className='font-normal'>August@example.com</span>
          </p>
          <p className='pt-7 font-bold text-black'>
            Phone: <span className='font-normal'>+91 590 0574 258</span>
          </p>
          <h2 className='pt-5 text-xl font-semibold text-black'>
            Social Media
          </h2>
          <div className='flex  gap-3 pt-3'>
            <div className='group rounded border border-gray-500 bg-white p-2 hover:bg-[#0044EB]'>
              <Facebook className='text-gray-500 group-hover:text-white' />
            </div>
            <div className='group rounded border border-gray-500 bg-white p-2 hover:bg-[#0044EB]'>
              <Twitter className='text-gray-500 group-hover:text-white' />
            </div>
            <div className='group rounded border border-gray-500 bg-white p-2 hover:bg-[#0044EB]'>
              <Linkedin className='text-gray-500 group-hover:text-white' />
            </div>
            <div className='group rounded border border-gray-500 bg-white p-2 transition-all duration-300 ease-linear hover:bg-[#0044EB]'>
              <Instagram className='text-gray-500 group-hover:text-white' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='pt-20 text-4xl font-bold'>Professional Skills</h2>
        <p className='pt-5 text-lg font-semibold leading-8 text-[#49515B]'>
          {' '}
          Since joining Techco in 1993, Matilda has been instrumental in
          transforming the company from a collection of tech-savvy individuals
          collaborating with startups to a world-renowned leader in Digital
          Systems Engineering Services, catering to the innovation needs of
          Fortune 500 enterprises. During Matilda's tenure as President and CEO,
          Techco has witnessed remarkable expansion in both its scale and
          revenue streams. This growth has been achieved hand-in-hand with the
          cultivation of a vibrant company culture that champions employee
          engagement and fosters a spirit of innovation at every level.
        </p>
        <div className='mt-10 grid grid-cols-4 gap-5'>
          <div className='relative flex h-[250px] flex-col justify-center rounded-3xl bg-white px-5 py-10 text-center'>
            <h2 className='text-6xl font-bold'>98%</h2>
            <p className='pt-4 text-xl font-semibold text-[#49515B]'>
              Product Development
            </p>
            <div className='absolute bottom-0 left-1/2 h-1 w-[55%] -translate-x-1/2 bg-[#2144EB]'></div>
          </div>
          <div className='relative flex flex-col justify-center rounded-3xl bg-white px-5 py-10 text-center'>
            <h2 className='text-6xl font-bold'>88%</h2>
            <p className='pt-4 text-xl font-semibold text-[#49515B]'>
              Problem-Solving
            </p>
            <div className='absolute bottom-0 left-1/2 h-1 w-[55%] -translate-x-1/2 bg-[#F26F4D]'></div>
          </div>
          <div className='relative flex flex-col justify-center rounded-3xl bg-white px-5 py-10 text-center'>
            <h2 className='text-6xl font-bold'>99%</h2>
            <p className='pt-4 text-xl font-semibold text-[#49515B]'>
              Communication Skills
            </p>
            <div className='absolute bottom-0 left-1/2 h-1 w-[55%] -translate-x-1/2 bg-[#F44380]'></div>
          </div>
          <div className='relative flex flex-col justify-center rounded-3xl bg-white px-5 py-10 text-center'>
            <h2 className='text-6xl font-bold'>77%</h2>
            <p className='pt-4 text-xl font-semibold text-[#49515B]'>
              Passion for Helping
            </p>
            <div className='absolute bottom-0 left-1/2 h-1 w-[55%] -translate-x-1/2 bg-[#F3A338]'></div>
          </div>
        </div>
        <h2 className='pt-20 text-4xl font-bold'>Educational Experience</h2>
        <p className='pt-5 text-lg font-semibold leading-8 text-[#49515B]'>
          Armed with a Bachelor's degree in Computer Science from the University
          of XYZ, I specialized in data structures, algorithms, and networks.
          Expanding my knowledge, I pursued a Master's in Information Technology
          Management at ABC University.
        </p>
        <div className=' rounded-lg p-4'>
          <h2 className='mb-4 text-lg font-bold'>Qualifications:</h2>
          <ul
            className='list-disc space-y-2 pl-5 text-xl leading-8  text-[#49515B]'
            style={{ listStyleType: 'disc' }}
          >
            <li className='marker:text-[#0044EB]'>
              Proficiency in systems analysis, design, implementation, and
              maintenance.
            </li>
            <li className='marker:text-[#0044EB]'>
              Strong knowledge of network protocols, hardware, and software
              components.
            </li>
            <li className='marker:text-[#0044EB]'>
              Experience with virtualization technologies (VMware, Hyper-V).
            </li>
            <li className='marker:text-[#0044EB]'>
              Skilled in cloud computing platforms (AWS, Azure, Google Cloud).
            </li>
            <li className='marker:text-[#0044EB]'>
              Proficient in scripting languages (Python, PowerShell).
            </li>
            <li className='marker:text-[#0044EB]'>
              Experience in system security and disaster recovery planning.
            </li>
            <li className='marker:text-[#0044EB]'>
              Excellent problem-solving and analytical skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
