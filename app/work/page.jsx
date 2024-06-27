"use client";

import { motion} from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

const projects=[
    {
        num:'01',
        category:'Cartino-Shopping-Website',
        title: 'project 1',
        description: 'I built a Cartino Shopping Website, a Nike website clone, focusing on the frontend. The project utilizes HTML5 and CSS3 to create a responsive and visually appealing layout.JavaScript is integrated to enhance interactivity and user experience. This clone demonstrates my ability to recreate professional-level web designs using fundamental web technologies.',
        stack: [{ name: "Html 5" }, { name: "Css 3" },{name: "Javascript"}],
        image: '/work/tab12.png',
        live:"",
        github:"https://github.com/devesh813/Cartino-Shopping-Website",
    },
    {
        num:'02',
        category:'Portfolio',
        title: 'project 2',
        description: 'I built and deployed a modern portfolio website using Next.js, Tailwind CSS, and Framer Motion. The project features a sleek, responsive design with smooth animations, showcasing my skills and projects. Next.js enabled server-side rendering and performance optimization, while Tailwind CSS ensured a consistent and visually appealing layout. Framer Motion added dynamic animations, enhancing the user experience.',
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js"}],
        image: '/work/tab2.png',
        live:"",
        github:"",
    },
    {
        num:'03',
        category:'AI/ML',
        title: 'project 3',
        description: 'I developed lightweight object detection models aimed at achieving high accuracy while maintaining computational efficiency. The project explores deep learning techniques to detect various indoor and outdoor objects. These include common indoor items like furniture and electronics, as well as outdoor objects such as vehicles and pedestrians. This work demonstrates the potential of efficient models in diverse environments.',
        stack: [{ name: "MobileNet" }, { name: "Yolo v5" }, { name: "Deep Learning"}],
        image: '/work/tab3.png',
        live:"",
        github:"https://github.com/devesh813/Light-Weight-Object-Detection",
    },
]



const Work = () => {
    const [project, setProject] = useState (projects [0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject (projects[currentIndex]);

    }


    return (
        <><StairTransition />
        <PageTransition/>
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity:1,
                transition:{delay:2.4, duration:0.4, ease:"easeIn"}
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="w-full xl:grid xl:grid-cols-9 xl:gap-6 gap-8 right-0 ">
                    <div className="w-full xl:col-span-6 col-span-9 xl:order-2 ">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xL:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        
                        >
                            {projects.map ((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* Overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                                            </div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                            {/* <div className="relative w-[1000px] h-[400px]"> */}
                                                <Image src={project.image} fill className="object-cover" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );

                            })}

                            {/* slider buttons */}

                            {/* <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc (50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            /> */}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                
                            />

                        </Swiper>
                    </div>
                    <div className="w-full xl:col-span-3 col-span-9 xl:order-1">
                        <div className="flex flex-col gap-[30px]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42x] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            {/* project description */}
                            <p className=" text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map ((item, index)=> {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length -1 && ","}
                                        </li>

                                    );

                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </motion.section>
        <PageTransition/>
        <StairTransition /></>
    )
};

export default Work;