import { Env } from '@src/constants/environments';
import { useNavigate } from 'react-router-dom';

export const ProjectCard: React.FC<any> = ({ data }) => {
  const { imgUrl } = Env;
  const navigate = useNavigate();
  const handleProjectDetail = (item: any) => {
    navigate(`/project-detail/${item?.slug}`, { state: item });
  };

  return (
    <>
      <div className='rounded-2xl bg-white'>
        <img className='p-4' src={imgUrl + data?.thumbnail} />
        <div className='px-4 py-6'>
          <div className='flex gap-2 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='blue'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-tag'
            >
              <path d='M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z' />
              <circle cx='7.5' cy='7.5' r='.5' fill='currentColor' />
            </svg>
            <span className='pb-4 text-sm'>Technology</span>
          </div>
          <button onClick={() => handleProjectDetail(data)} className='w-full text-left'>
            <h1 className='text-4xl'>{data?.title}</h1>
          </button>
        </div>
      </div>
    </>
  );
};
