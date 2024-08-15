import { HeroSection } from "@src/components/HeroSection/Herosection.tsx";
import { TeamCard } from "@src/pages/Team/TeamCard.tsx";

export const Team = () => {
    return (
        <>
            <div className="bg-[#E3F0ff] ">
                <HeroSection subHeading={"Members 😍 Team"} heading={"Team Member"} />
                <div className="px-4 py-20 lg:flex lg:items-center lg:justify-between xl:mx-[100px] lg:mx-[30px] 2xl:mx-[500px]">
                    <div className="lg:p-5">
                        <div className="flex gap-2">
                            <span>Our Dedicated</span>
                            <p className="rounded bg-[#F44380] px-2">Team 🙂</p>
                        </div>
                        <h1 className="pt-5 text-3xl font-semibold">Get to Know Our Expert Techco Team</h1>
                        <p className="pt-5 text-lg leading-8">
                            Get acquainted with the powerhouse behind Techco – our expert team of professionals dedicated to revolutionizing the IT landscape. Comprising.
                        </p>
                        <button className="my-5 rounded-[35px] bg-[#0044EB] px-6 py-2 text-base font-bold text-white sm:px-10 sm:py-3 sm:text-lg lg:text-xl">
                            TALK TO AN EXPERT
                            <i className="fa-solid fa-arrow-up-long ml-2 rotate-45 sm:ml-4"></i>
                        </button>
                    </div>
                    <div className="md:pt-10">
                        <img src={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/team_cartoon_image.webp"} alt="Team Cartoon" />
                    </div>
                </div>
                <div className="bg-white pb-20">
                    <div className="flex justify-center pt-20 gap-3">
                        <p className="rounded bg-[#F44380] px-2 text-white">Our Expert</p>
                        <span>Team Members 😍</span>
                    </div>
                    <h1 className="py-5 pb-20 text-center text-4xl font-bold">Top Skilled Experts</h1>
                    <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3 lg:mx-[30px] xl:mx-[100px] 2xl:mx-[500px]">
                        <TeamCard
                            srcImg={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_1.webp"}
                            name={"Atticus Sterling"} post={"Systems Engineer"} />
                        <TeamCard
                            srcImg={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_2.webp"}
                            name={"Orion Jasper"} post={"IT Consultant"} />
                        <TeamCard
                            srcImg={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_3.webp"}
                            name={"August Everest"} post={"Systems Engineer"} />
                        <TeamCard
                            srcImg={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_4.webp"}
                            name={"Maverick Phoenix"} post={"Data Analyst"} />
                        <TeamCard
                            srcImg={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_5.webp"}
                            name={"Daxton Atlas"} post={"Project Manager"} />
                        <TeamCard
                            srcImg={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/05/team_member_image_1.webp"}
                            name={"Atticus Sterling"} post={"Systems Engineer"} />
                    </div>
                </div>
                <div className="bg-[#E3F0FF]">
                    <div className="flex justify-center pt-20 gap-3">
                        <p className="rounded bg-[#F44380] px-2 text-white">Techco</p>
                        <span>Company 😍</span>
                    </div>
                    <h1 className="py-5 pb-20 text-center text-4xl font-bold">Our Global Team is Growing</h1>
                    <img src="/src/assets/images/team_map.webp" className="px-10 xl:px-32 2xl:mx-auto" alt="Team Map" />
                </div>
            </div>
        </>
    );
};
