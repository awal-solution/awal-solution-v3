
const ContactUs = () => {
  return (
      <>
        <div className="bg-[#E3F0FF]">
          <div
              className="bg-[#020842] bg-[url('https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/bg_pattern_4.svg')] bg-cover bg-no-repeat py-24 text-center text-white">
            <h2 className="mt-24">
              <span className="rounded bg-[#F44380] px-2 text-center">Contact</span> Us 😍
            </h2>
            <h1 className="text-5xl font-bold">Contact Us</h1>
          </div>
          <div className="container mx-auto px-4">
            <div
                className="mx-4 mt-12 grid gap-6 sm:mx-10 sm:mt-16 sm:grid-cols-1 md:mx-24 md:mt-24 md:grid-cols-2 lg:mx-36 lg:grid-cols-3 xl:grid-cols-4">
              <div className="rounded-2xl bg-white px-5 py-8 text-center sm:py-12">
                <div className="rounded-full  p-4 sm:p-6">
                  <div className="flex justify-center">
                    <div className="max-w-xs">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0044EB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin mx-auto size-12 rounded-full bg-[#E5ECFD] p-3 text-[#0044EB] sm:size-16"
                      >
                        <path
                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                        />
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                  </div>


                </div>
                <p className="pt-3 text-lg font-semibold sm:pt-5 sm:text-xl">Location</p>
                <p className="pt-3 text-sm sm:pt-5 sm:text-base">Sunshine Business Park Sector-94, Poland</p>
              </div>
              <div className="rounded-2xl bg-white px-5 py-8 text-center sm:py-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
               
                   fill="none"
                   stroke="#0044EB"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   className="lucide lucide-phone-call mx-auto size-12 rounded-full bg-[#E5ECFD] p-3 text-[#0044EB] sm:size-16"
              >
                <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
                <path d="M14.05 2a9 9 0 0 1 8 7.94"/>
                <path d="M14.05 6A5 5 0 0 1 18 10"/>
              </svg>


              <p className="pt-3 text-lg font-semibold sm:pt-5 sm:text-xl">Contact</p>
              <p className="pt-3 text-sm sm:pt-5 sm:text-base">+88(0) 555-0108</p>
              <p className="text-sm sm:text-base">+88(0) 555-01117</p>
            </div>
            <div className="rounded-2xl bg-white px-5 py-8 text-center sm:py-12">
              <i className="fa-solid fa-envelope rounded-full bg-[#E8EDFD] p-4 text-2xl text-[#0044EB] sm:p-6 sm:text-3xl"></i>
              <p className="pt-3 text-lg font-semibold sm:pt-5 sm:text-xl">Email</p>
              <p className="pt-3 text-sm sm:pt-5 sm:text-base">Techco@example.com</p>
              <p className="text-sm sm:text-base">gmail.@example.com</p>
            </div>
            <div className="rounded-2xl bg-white px-5 py-8 text-center sm:py-12">
              <i className="fa-solid fa-calendar rounded-full bg-[#E8EDFD] p-4 text-2xl text-[#0044EB] sm:p-6 sm:text-3xl"></i>
              <p className="pt-3 text-lg font-semibold sm:pt-5 sm:text-xl">Visit Between</p>
                <p className="pt-3 text-sm sm:pt-5 sm:text-base">Mon - Sat: 8.00-5.00</p>
                <p className="text-sm sm:text-base">Sunday: Closed</p>
              </div>
            </div>
          </div>


          {/*main div*/}
          <div
              className="mx-4 mt-12 flex flex-col gap-6 pb-10 sm:mx-10 sm:mt-16 md:mx-24 md:mt-24 lg:mx-36 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Send Us A Message</h2>
              <p className="mt-3 text-sm text-[#49515B] sm:text-base lg:text-lg">
                Give us chance to serve and bring magic to your brand.
              </p>
              <form className="mt-6 sm:mt-10">
                <div className="mb-5 flex flex-col gap-4 md:flex-row">
                  <div className="w-full">
                    <label className="text-base font-semibold sm:text-lg lg:text-xl">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="mt-3 w-full rounded-xl bg-white py-2 pl-3 shadow-card sm:py-3"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-base font-semibold placeholder:text-[#696969] sm:text-lg lg:text-xl">
                      Your Email
                    </label>
                    <input
                        type="text"
                        placeholder="AwalSolution@example.com"
                        className="mt-3 w-full rounded-xl bg-white py-2 pl-3 shadow-card sm:py-3"
                    />
                  </div>
                </div>
                <label className="text-base font-semibold sm:text-lg lg:text-xl">Your Phone</label>
                <input
                    type="text"
                    placeholder="+8250-3560 6565"
                    className="mb-5 mt-3 w-full rounded-xl bg-white py-2 pl-3 shadow-card sm:py-3"
                />
                <label className="text-base font-semibold sm:text-lg lg:text-xl">Message</label>
                <textarea
                    rows={5}
                    cols={40}
                    placeholder="How can we help you?"
                    className="mt-3 w-full rounded-xl bg-white py-2 pl-3 shadow-card sm:py-3"
                ></textarea>
              </form>
              <button
                  className="my-5 rounded-[35px] bg-[#0044EB] px-6 py-2 text-base font-bold text-white sm:px-10 sm:py-3 sm:text-lg lg:text-xl">
                Send Message
                <i className="fa-solid fa-arrow-up-long ml-2 rotate-45 sm:ml-4"></i>
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <iframe
                  loading="lazy"
                  className="h-48 w-full rounded-xl sm:h-64 md:h-96 lg:h-full"
                  src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                  title="London Eye, London, United Kingdom"
                  aria-label="London Eye, London, United Kingdom"
              ></iframe>
            </div>
          </div>
        </div>
      </>
  );
};

export default ContactUs;
