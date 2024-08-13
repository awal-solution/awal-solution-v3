
const BlogHeader = () => (
  <div className="relative">
    <img className="absolute h-96 w-full object-cover" src="/src/assets/images/bg_pattern_4.svg" alt="" />
    <div className="absolute  inset-0 h-96 bg-[#020842e6]">
      <div className="mx-64">
        <h1 className="pt-24 text-center text-6xl font-bold text-white">Blog</h1>
        <p className="pt-5 text-center text-lg text-white">Techco / Blog</p>
      </div>
    </div>
  </div>
);

const BlogContent = () => (
  <div className="bg-[#E3F0FF] pb-20 pt-40">
    <div className="mx-64 flex gap-14">
      <div className="w-[70%]">
        <BlogPost />
      </div>
      <div className="w-[30%]">
        <Sidebar />
      </div>
    </div>
  </div>
);

const BlogPost = () => (
  <div className="mt-[300px] rounded-2xl bg-white p-7">
    <div className="overflow-hidden">
            <img className="overflow-hidden duration-300 ease-linear hover:scale-110" src="/src/assets/images/blog.jpg"          alt="" />
    </div>
    <PostMeta />
    <h3 className="pb-5 font-serif text-4xl font-bold">
      <a className="text-[#020842] hover:text-[#0044EB]" href="#">
        Leading the Digital Age with Groundbreaking IT Technologies
      </a>
    </h3>
    <p className="py-9 font-serif text-lg font-medium tracking-wide text-[#49515B]">
      Gain exclusive insights into the world of IT solutions with Techco’s distinguished thought leaders. With years of
      experience and a deep understanding of industry trends, our thought leaders offer invaluable perspectives that
      illuminate the path to technological excellence. From emerging technologies to innovative strategies, they provide
      unique insights that inform [...]
    </p>
    <div className="pb-5">
      <button className="flex items-center justify-center rounded-full bg-[#020842] px-10 py-3 pt-4 text-base text-white hover:bg-[#0044EB]">
        <div>READ MORE</div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="white" d="m5.99 16.596 8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z" />
          </svg>
        </div>
      </button>
    </div>
  </div>
);

const PostMeta = () => (
  <div className=" flex gap-6 py-5">
    <div className="flex items-center35 gap-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none" stroke="#0044EB" strokeWidth="1.5">
            <circle cx="12" cy="6" r="4" />
            <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
          </g>
        </svg>
      </div>
      <div className="text-[#49515B]">admin</div>
    </div>
    <div className="flex items-center gap-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="#0044EB"
            fillRule="evenodd"
            d="M4.368 14.632L3 16v-2.8A5.64 5.64 0 0 1 2 10c0-3.314 2.91-6 6.5-6 3.254 0 5.95 2.207 6.425 5.088A6.57 6.57 0 0 1 16 9c3.314 0 6 2.462 6 5.5 0 1.125-.368 2.17-1 3.041V20l-1.225-1.225A6.32 6.32 0 0 1 16 20c-2.825 0-5.194-1.79-5.831-4.2-.533.13-1.092.2-1.669.2a6.81 6.81 0 0 1-4.132-1.368M8.5 14c2.52 0 4.5-1.828 4.5-4 0-2.172-1.98-4-4.5-4S4 7.828 4 10c0 2.172 1.98 4 4.5 4m3.546 1.03C12.336 16.687 13.972 18 16 18c2.24 0 4-1.6 4-3.5S18.24 11 16 11c-.389 0-.763.048-1.117.138-.338 1.626-1.387 3.018-2.837 3.891"
          />
        </svg>
      </div>
      <a className="text-[#49515B]" href="#">
        Comments (0)
      </a>
    </div>
    <div className="flex items-center gap-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none" stroke="#0044EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
            <path d="M12 7v5l3 3" />
          </g>
        </svg>
      </div>
      <a className="text-[#49515B]" href="#">
        June 8, 2024
      </a>
    </div>
  </div>
);

const Sidebar = () => (
    <div className="mt-[380px]">
    <strong className="text-lg text-[#020842]">SEARCH</strong>
    <div className="relative py-6">
      <input className="w-full rounded-2xl px-3 py-4" type="text" placeholder="Search...." />
      <div className="absolute right-4 top-8 size-10 rounded-sm bg-[#0044EB] text-white">
        <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M4.5 10a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M10 3a7 7 0 1 0 4.391 12.452l5.329 5.328a.75.75 0 1 0 1.06-1.06l-5.328-5.329A7 7 0 0 0 10 3"
          />
        </svg>
      </div>
    </div>
    <div className="py-4">
      <strong className="text-lg text-[#020842]">RECENT POST</strong>
    </div>
    <div className="w-full rounded-2xl bg-white p-5">
      <div className="flex items-center gap-6">
        <div>
          <img className="w-[150px] rounded-md" src="/src/assets/images/post blog .jpg" alt="image" />
        </div>
        <div>
          <div className="pb-3 text-[#49515B]">June 8, 2024</div>
          <a className="py-3 text-lg font-medium" href="#">
            Unlocking New Possibilities with Advanced Cloud ...
          </a>
        </div>
      </div>
    </div>
  </div>
);

const BlogPage = () => (
  <div>
    <BlogHeader />
    <BlogContent />
  </div>
);

export default BlogPage;
