interface Props {
  subHeading: string;
  heading: string;
}

export const HeroSection: React.FC<Props> = ({ subHeading, heading }) => {
  return (
    <div className="w-full bg-[#020842] bg-[url('https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/bg_pattern_4.svg')] bg-cover bg-no-repeat px-16  py-20 text-center text-white sm:py-16 md:p-24 lg:p-32">
      <h2 className='mt-12 sm:mt-16 md:mt-24'>
        <span className='rounded bg-[#F44380] px-4 text-center sm:px-6 md:px-8 lg:px-10'>
          {subHeading}
        </span>
      </h2>
      <h1 className='mt-4 text-3xl font-bold sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl'>
        {heading}
      </h1>
    </div>
  );
};
