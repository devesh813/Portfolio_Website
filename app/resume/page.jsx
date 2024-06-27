"use client";

// import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";

// import {SiTailwindcss, SiNextdotjs} from "react-icons/si";


const about={
    title: 'About me',
    description: 'I am a Computer Science graduate with a passion for Software engineering and Web development. Proven ability to learn new technologies quickly and apply them to real-world problems. Seeking a position where I can use my skills and knowledge to contribute to a team and make a positive impact on the company.',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Devesh Borkar",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91)8827463629",
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Email",
            fieldValue: "devub8@gmail.com",
        },
        

    ]
}

//experience data
const experience = {
    icon: "",
    title: "My Experience",
    description: 'During my internship at Coforge, I honed my development skills by working on web applications, collaborating with cross-functional teams, and contributing to code reviews. Additionally, I undertook freelance projects during college, gaining experience in full-stack development and sharpening my problem-solving abilities.',
    items: [
        {
            company: "Coforge",
            position: "Software Developer Intern",
            duration: "Summer 2024",
        },
        // {
        //     company: "Comapany 2",
        //     position: "Software Developer Intern",
        //     duration: "1 June - 14 July",
        // },
        
    ],
};


//education data
const education = {
    icon: "",
    title: "My Education",
    description: 'I pursued my Bachelor\'s in CSE with honors in Data Science from Shri Ramdeobaba College of Engineering in Nagpur. This comprehensive program equipped me with a strong foundation in data science, including coursework in machine learning, data analysis, and statistics. I also engaged in various extracurricular activities, further enhancing my interpersonal and leadership skills.',
    items: [
        {
            institution: "RCOEM, Nagpur",
            degree: "Btech in CSE",
            duration: "2021 - 2025",
        },
        {
            institution: "Dr Ambededkar College, Nagpur",
            degree: "12th",
            duration: "2020 - 2021",
        },
        {
            institution: "Bhawan's Vidya Mandir, Nagpur",
            degree: "10th",
            duration: "2019 - 2020",
        },
        
    ],
};


//skills data

/*const skills ={
    title: "My Skills",
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quod dicta dolor dolore laboriosam commodi.',
    skilllist:[
        {
            icon: <FaHtml5/>,
            name: 'html 5',
        },
        {
            icon: <FaCss3/>,
            name: 'Css',
        },
        {
            icon: <FaJs/>,
            name: 'Javascript',
        },
        {
            icon: <FaReact/>,
            name: 'react.js',
        },
        {
            icon: <SiNextdotjs/>,
            name: 'next.js',
        },
        {
            icon: <SiTailwindcss/>,
            name: 'tailwind.css',
        },
    ]
    
}*/

import { FaHtml5, FaCss3, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiC, SiMysql, SiAmazonaws } from "react-icons/si";

const skills = {
    title: "My Skills",
    description: 'I am proficient in front-end technologies including HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. These skills enable me to create responsive, user-friendly web applications. I also have a strong foundation in back-end technologies such as C, Java, Python, and SQL, which I use to develop robust and efficient server-side solutions. Additionally, I have experience with AWS, leveraging cloud services to deploy and manage scalable applications.',
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: 'HTML 5',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <FaReact />,
            name: 'React.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
        },
        {
            icon: <SiC />,
            name: 'C',
        },
        {
            icon: <FaJava />,
            name: 'Java',
        },
        {
            icon: <SiPython />,
            name: 'Python',
        },
        {
            icon: <SiMysql />,
            name: 'SQL',
        },
        {
            icon: <SiAmazonaws />,
            name: 'AWS',
        },
    ]
};









import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {Tooltip, TooltipContent, TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";

const Resume = () => {
    
    return (
        <><StairTransition />
        <PageTransition/><motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 x:py-0"


        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about"> About me</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>


                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                I am a Computer Science graduate with a passion for Software engineering and Web development. Proven ability to learn new technologies quickly and apply them to real-world problems. Seeking a position where I can use my skills and knowledge to contribute to a team and make a positive impact on the company.
                                Check out my <Link href="https://leetcode.com/u/devesh_8/" className="font-bold underline text-white/75">LeetCode profile</Link> to see my problem-solving skills
                                </p>

                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>

                                        );

                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skilllist.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;


                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-05">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}</h3>

                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>

                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-05">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}</h3>

                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>

                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>


                </Tabs>
            </div>

        </motion.div>
        
        <PageTransition/>
        <StairTransition /></>
    )
};

export default Resume;