import { Component } from "react";

export class HeroSection extends Component<{ subHeading: any, heading: any }> {
    render() {
        const { subHeading, heading } = this.props;
        return (
            <>
                <div
                    className="bg-[#020842] bg-[url('https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/bg_pattern_4.svg')] bg-cover bg-no-repeat py-20 w-full  px-16 sm:py-16 md:px-24 md:py-24 lg:px-32 lg:py-32 text-center text-white">
                    <h2 className="mt-12 sm:mt-16 md:mt-24">
                        <span className="rounded bg-[#F44380] px-4 sm:px-6 md:px-8 lg:px-10 text-center">{subHeading}</span>
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-6">{heading}</h1>
                </div>
            </>
        );
    }
}
