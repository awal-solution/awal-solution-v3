import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const TeamCard: React.FC<any> = ({ data }) => {
  const navigate = useNavigate();
  const handleTeamDetail = (id: number) => {
    navigate(`/team-detail/${id}`, { state: data });
  };

  return (
    <div className='relative rounded-3xl bg-[#E3F0FF] p-3 md:p-10'>
      <div className='group relative h-[400px] rounded-3xl bg-white pt-10'>
        <img
          src={data.profile_picture}
          alt='Team member'
          className='size-full  object-scale-down transition-all duration-300 ease-linear hover:blur-[1px]'
        />
        <button
          onClick={() => handleTeamDetail(data.id)}
          className='absolute inset-0 mx-auto mt-[40%] flex size-fit items-center  justify-center rounded-full bg-[#0044EB]/0 p-16 transition-all duration-300 ease-linear group-hover:bg-[#0044EB]/100'
        >
          <ArrowUpRight className='text-white opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100' />
        </button>
      </div>
      <h1 className='pt-5 text-center text-2xl'>
        {data.first_name + ' ' + data.last_name}
      </h1>
      <p className='pt-2 text-center'>{data.role}</p>
      <div className='flex justify-center gap-3 pt-3'>
        {data.social_links.map((item: any, index: any) => {
          return (
            <Link
              key={index}
              to={item.link}
              className='group rounded bg-white p-2 hover:bg-blue-500'
            >
              <img src={item.icon} alt='icon' />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
