import {OurPortfolio} from "@src/pages/portfolio/components/Tabs.tsx";
import {HeroSection} from "@src/components/HeroSection/Herosection.tsx";

const Portfolio = () => {
    return (
        <>
            <div className="bg-[#E3F0FF] w-full">
                <HeroSection subHeading={"Our Portfolio"} heading={"Our Portfolio"} />
                <div className="container mx-auto">
                    <OurPortfolio/>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
