import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const TeamCard = ({ srcImg, name, post }:any) => {
    return (
        <div className="relative rounded-3xl bg-[#E3F0FF] mx-5 lg:w-fit md:w-fit sm:w-fit sm:mx-auto md:mx-auto p-10">
            <div className="relative rounded-3xl bg-white overflow-hidden group">
                <img src={srcImg} alt="Team member" className="w-full h-full hover:blur-[1px] object-cover md:w-[400px] md:object-cover sm:object-cover" />
                <div className="absolute inset-0 flex mx-auto mt-[40%] bg-[#0044EB] rounded-full p-10 w-fit h-fit bg-opacity-0 group-hover:bg-opacity-100 transition-all duration-300 ease-linear">
                    <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" />
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
    )
}
