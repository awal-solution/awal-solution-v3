import {
  sectionHeading,
  articalsShapes,
  articalData,
} from '@src/data/latest_article';

export const Article = () => {
  return (
    <section className='relative bg-white pb-12'>
      <img
        src={articalsShapes.leftShape}
        alt='banner'
        className='absolute bottom-0 left-0 z-10 h-[270px]'
      />
      <img
        src={articalsShapes.rightShape}
        alt='banner'
        className='absolute bottom-0 right-0 z-10 h-[270px]'
      />
      <div className='flex justify-center pb-5 pt-24'>
        <div className='mx-auto w-[136px] bg-[url(/src/assets/images/title_bar/shape_title_under_line.svg)] bg-right-bottom bg-no-repeat pb-2 pr-4 text-black'>
          {sectionHeading.title}
        </div>
      </div>
      <h1 className='pb-12 text-center text-5xl font-bold text-[#020842]'>
        Latest <span className='text-[#0044EB]'>Articles</span>
      </h1>
      <div className='relative z-20 mx-auto grid max-w-screen-xl grid-cols-3 gap-5'>
        {articalData?.map((item: any, index: any) => {
          return (
            <div key={index}>
              <img src={item.image} alt='post image' className='rounded-xl' />
              <h1 className='py-6 text-3xl'>{item.title}</h1>
              <div className='flex justify-between px-5'>
                <div className='flex items-center gap-2'>
                  <div>
                    <img src={item.userIcon} alt='image' />
                  </div>
                  {item.auther}
                </div>
                <div className='flex items-center gap-2'>
                  <div>
                    <img src={item.dateIcon} alt='image' />
                  </div>
                  {item.date}
                </div>
                <div className='flex items-center gap-2'>
                  <div>
                    <img src={item.commentIcon} alt='image' />
                  </div>
                  {item.commentCount}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
