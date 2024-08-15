import {HeroSection} from "@src/components/HeroSection/Herosection.tsx";

export const  Team = () =>{
    return(<>
        <div className="bg-[#E3F0ff] ">
        <HeroSection subHeading={"Members 😍 Team"} heading={"Team Member"} />
            <div className="px-4 py-20 lg:flex lg:items-center lg:justify-between 2xl:mx-96 2xl:flex 2xl:items-center 2xl:justify-between">
                <div className="lg:p-5">
                <div className="flex gap-2 ">
                    <span>Our Dedicated</span><p className="rounded bg-[#F44380] px-2 ">Team 🙂</p>
                </div>
                <h1 className="pt-5 text-3xl font-semibold">Get to Know Our Expert Techco Team</h1>
                <p className="pt-5 text-lg leading-8">Get acquainted with the powerhouse behind Techco – our expert team
                    of professionals dedicated to revolutionizing the IT landscape. Comprising.</p>
                <button
                    className="my-5 rounded-[35px] bg-[#0044EB] px-6 py-2 text-base font-bold text-white sm:px-10 sm:py-3 sm:text-lg lg:text-xl">
                    TALK TO AN EXPOERT
                    <i className="fa-solid fa-arrow-up-long ml-2 rotate-45 sm:ml-4"></i>
                </button>
                </div>
                <div className="md:pt-10">
                    <img src={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/team_cartoon_image.webp"} />

                </div>
            </div>
            <div className="bg-white">
                <div className="flex justify-center gap-3 pt-5"><p className="rounded bg-[#F44380] px-2 text-white ">Our Expert</p><span>Team Members 😍</span></div>
                <h1 className="py-5 text-center text-2xl font-semibold">Top Skilled Experts</h1>
                <div className="bg-white p-10">
                    <div className="bg-[#E3F0ff] p-3">
                    <div className="bg-white ">
                    <img src={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_1.webp"}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}