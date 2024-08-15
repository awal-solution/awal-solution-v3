import {Component} from "react";

export class SinglePortfolioCard extends Component<{ subTab: any }> {
    render() {
        const {subTab} = this.props;
        return (<>
            <div className="rounded-2xl bg-white">
                <img className="p-4"
                     src={"https://wp.xpressbuddy.com/techco/wp-content/uploads/2024/06/portfolio_item_image_4-800x600.webp"}/>
                <div className="px-4 py-6">
                    <div className="flex gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="blue"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-tag">
                            <path
                                d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
                        </svg>
                        <span className="pb-4 text-sm">Technology</span></div>
                    <h1 className="text-4xl">{subTab}</h1>
                </div>
            </div>
        </>)
    }
}