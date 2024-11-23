"use client"
import Image from "next/image";
import React  from "react";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    const cvPath = '/cv.pdf';
   
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:texl-6xl font-extrabold"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-red-400">Hello, I Am {" "} </span>
                    <br/>
                    <TypeAnimation
                    sequence={[
                        'Saman',
                        1000,
                        'Front End Developer',
                        1000,
                        "UIUX Designer",
                        1000,
                        "Web Developer",
                        1000,
                        "UI Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}/></h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
                    Curiosity to create pixel perfect digital experience for users
                    </p>
                    <div>
                        <a href="/#contact" className="px-6 py-3 w-full sm:w-fit  rounded-full  mr-4 bg-gradient-to-br from-blue-300 via-teal-500 to-pink-300 hover:bg-slate-800 hover:text-white">Hire Me</a>
                        <a href={cvPath} target="_blank" className="px-1 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-300 via-teal-500 to-pink-300 hover:bg-slate-800 text-white mt-3"><span className="bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></a>
                       
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
                        <Image
                            src="/hero.png"
                            alt="hero image"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
