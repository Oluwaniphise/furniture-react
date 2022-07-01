import React from "react";
import { hero } from '../data';

import Stats from "./Stats";

const Hero = () => {
    const {title, subtitle, buttonText} = hero
    return (
        <section className=" max-h-[850px] w-full bg-right bg-cover bg-no-repeat text-white
         bg-hero pt-[229px] pb-[254px] relative mb-12 lg:bg-center ">
            <div className="container text-center mx-auto">
                {/* {title} */}
                <h1 className="text-2xl mx-auto font-semibold mb-[30px] 
                lg:text-[60px] lg:leading-tight lg:max-w-[880px]">{title}
                </h1>

                {/* subtitle */}
                <h2 className="mb-[30px] max-w-[627px] mx-auto lg:mb-[65px]
                lg:text-xl">{subtitle}</h2>

                {/* cta button */}
            <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)]
           px-[35px] py-[9px] mb-[160px]  text-xl rounded-md backdrop-blur-md
           transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]">{buttonText}</button>

           {/* stats */}
           <div className="-top-[70px] relative">
           <Stats />

           </div>
            </div>
        </section>
       

    )
}

export default Hero;