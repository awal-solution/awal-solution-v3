import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import fb from '@src/assets/images/social-black-icons/facebook.svg';
import tw from '@src/assets/images/social-black-icons/twitter.svg';
import linkedin from '@src/assets/images/social-black-icons/linkedin.svg';
import insta from '@src/assets/images/social-black-icons/insta.svg';
import { Env } from '@src/constants/environments';

export const TeamCard: React.FC<any> = ({ data }) => {
  const { imgUrl } = Env;
  const navigate = useNavigate();
  const handleTeamDetail = (id: number) => {
    navigate(`/team-detail/${id}`, { state: data });
  };

  return (
    <div className='relative rounded-3xl bg-[#E3F0FF] p-3 md:p-10'>
      <div className='group relative h-[400px] rounded-3xl bg-white pt-10'>
        <img
          src={imgUrl + data.profile_picture}
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
      <h1 className='pt-5 text-center text-2xl'>{data.first_name + ' ' + data.last_name}</h1>
      <p className='pt-2 text-center'>{data.role}</p>
      <div className='flex justify-center gap-3 pt-3'>
        <Link to={data.facebook} className='group rounded bg-white p-2 hover:bg-blue-500'>
          <img src={fb} alt='icon' />
        </Link>
        <Link to={data.linkedin} className='group rounded bg-white p-2 hover:bg-blue-500'>
          <img src={linkedin} alt='icon' />
        </Link>
        <Link to={data.twitter} className='group rounded bg-white p-2 hover:bg-blue-500'>
          <img src={tw} alt='icon' />
        </Link>
        <Link to={data.instagram} className='group rounded bg-white p-2 hover:bg-blue-500'>
          <img src={insta} alt='icon' />
        </Link>
      </div>
    </div>
  );
};
