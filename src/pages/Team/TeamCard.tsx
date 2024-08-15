/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const TeamCard = ({ srcImg, name, post }: any) => {
    return (
        <div className="relative mx-5 rounded-3xl bg-[#E3F0FF] p-5 sm:mx-auto sm:w-fit md:mx-auto md:w-fit lg:w-fit">
            <div className="group relative overflow-hidden rounded-3xl bg-white">
                <img
                    src={srcImg}
                    alt="Team member"
                    className="h-auto w-full object-cover transition-all duration-300 ease-linear hover:blur-[1px] sm:h-[300px] md:h-[400px]"
                />
                <div className="absolute inset-0 mx-auto mt-[40%] flex h-fit w-fit  p-16 items-center justify-center rounded-full bg-[#0044EB] bg-opacity-0 transition-all duration-300 ease-linear group-hover:bg-opacity-100">
                    <ArrowUpRight className="text-white opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
                </div>
            </div>
            <h1 className="pt-5 text-center text-3xl font-bold">{name}</h1>
            <p className="pt-2 text-center font-semibold">{post}</p>
            <div className="flex justify-center gap-3 pt-3">
                <div className="group rounded bg-white p-2 hover:bg-blue-500">
                    <Facebook className="text-gray-500 group-hover:text-white" />
                </div>
                <div className="group rounded bg-white p-2 hover:bg-blue-500">
                    <Twitter className="text-gray-500 group-hover:text-white" />
                </div>
                <div className="group rounded bg-white p-2 hover:bg-blue-500">
                    <Linkedin className="text-gray-500 group-hover:text-white" />
                </div>
                <div className="group rounded bg-white p-2 transition-all duration-300 ease-linear hover:bg-blue-500">
                    <Instagram className="text-gray-500 group-hover:text-white" />
                </div>
            </div>
        </div>
    );
};
