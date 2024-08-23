interface SectionTitleProps {
  title?: string;
  subTitle?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subTitle,
  align = 'center'
}) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`text-${align}`}>
      {title && <h2 className='text-4xl font-bold tracking-widest'>{title}</h2>}
      {subTitle && (
        <div className="align-center mx-auto my-4 flex items-center before:inline-block before:h-px before:w-[20px] before:grow before:align-middle  before:content-[''] after:inline-block after:h-px after:w-[20px] after:grow after:align-middle after:content-['']">
          <span className='whitespace-nowrap px-4 py-0 text-sm'>{subTitle}</span>
        </div>
      )}
    </div>
  );
};
