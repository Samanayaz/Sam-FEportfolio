'use client';
import React, { useTransition, useState, startTransition } from 'react';
import Image from 'next/image';
import TabButton from './tabButton';

const Tab_Data = [
    {
        title: 'skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Jsvascript</li>
                <li>Scss</li>
                <li>TailWindCss</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>UI Developer at Camping World (3.4 years)</li>
                <li>Front End Developer and designer at Upwork</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>UIUX Specialization Certification from California School of Arts</li>
                <li>Bachelors in Science from Jinnah University</li>
            </ul>
        )
    }
]

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();


    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (

        <section className='text-white' id='about'>
            <div className='md:grid flex flex-col-reverse md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 items-start'>
                <Image src="/interface2.png" width={500} height={500} alt='monitor and hands' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>A UI Developer with the extensive experience and passion to create interactive and responsive web solutions. I have detailed eye for design, along with creative problem-solving approach for best user experience. I am always looking forward to learn, when it comes to increasing my skill set. My knowledge of user research and design catalyzes seamless collaboration with different teams to create pixel perfect implementation of digital solutions.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education</TabButton>

                    </div>
                    <div className='mt-8'>
                         { Tab_Data.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
