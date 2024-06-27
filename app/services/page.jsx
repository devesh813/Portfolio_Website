"use client";

import { BArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const services =[
    {
        num:'01',
        title:'Web Development',
        description: 'I am an expert in frontend web development, specializing in creating visually appealing and user-friendly interfaces. I have extensive experience with HTML, CSS, JavaScript, and frameworks like React and Next.js, ensuring responsive and dynamic web applications and implementing modern design trends to deliver high-quality user experiences.',
        href: "https://github.com/devesh813"
    },
    {
        num:'02',
        title:'DSA',
        description: 'I am well-versed in Data Structures and Algorithms, with a strong foundation in solving complex problems efficiently. My expertise includes various data structures such as arrays, linked lists, stacks, queues, trees, and graphs.I am also active on LeetCode, which helps me stay sharp  and continuously refine my problem-solving skills.',
        href:"https://github.com/devesh813"
    },
    {
        num:'03',
        title:'AI/ML',
        description: 'I have knowledge in AI/ML, having worked on projects involving advanced machine learning techniques and applications. One notable project involved utilizing light-weight models for object detection using MobileNet, demonstrating my ability to implement efficient and effective AI solutions. My experience includes developing, training, and deploying machine learning models to solve real-world problems, showcasing my expertise in this rapidly evolving field.',
        href: "https://github.com/devesh813"
    },
    {
        num:'04',
        title:'AWS Cloud',
        description: 'I have knowledge about AWS cloud services, having attained foundational-level expertise. This includes understanding core AWS services such as EC2, S3, and Lambda, infrastructure, and best practices. My skills enable me to design, deploy, and manage applications on the AWS platform, ensuring scalability, reliability, and cost-efficiency. This foundation provides a strong base for leveraging cloud technologies to support various projects and business needs.',
        href: "https://github.com/devesh813"
    },
]

import {motion} from 'framer-motion';
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

const Services = () => {
    return (
        <><StairTransition />
        <PageTransition/>
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
            <motion.div
                initial={{opacity: 0 }}
                animate= {{
                    opacity:1,
                    transition: {delay:2.4, duration:0.4,ease: "easeIn" },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map ( (service, index)=> {
                    return(
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                <Link 
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex
                                    justify-center items-center hover:-rotate-45"
                                >  
                                    <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            {/* titile */}
                            <h2 className="text-[42px] font-bold leading-none text-white
                            group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            {/* description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    )
                })}


            </motion.div>

            </div>
        </section>
        <PageTransition/>
        <StairTransition /></>
    );
};

export default Services;