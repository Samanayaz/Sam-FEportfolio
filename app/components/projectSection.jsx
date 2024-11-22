'use client';
import React, { useState } from 'react';
import ProjectCard from './projectCard';
import ProjectTag from './projectTag';


const projectData = [
    // {
    //     id: 1,
    //     title: "React Website",
    //     description: "Project 1",
    //     image: "/projects/homepage.webp",
    //     tag: ["FrontEnd", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    {
        id: 2,
        title: "Medical Homepage Website",
        description: "Project 2",
        image: "/projects/homepage.webp",
        tag: ["FrontEnd", "Web"],
        gitUrl: "https://github.com/Samanayaz/Homepage",
        previewUrl: "https://samanayaz.github.io/Homepage/"
    },
    {
        id: 3,
        title: "Product Checkout",
        description: "Project 3",
        image: "/projects/checkout.webp",
        tag: ["FrontEnd", "Web"],
        gitUrl: "https://github.com/Samanayaz/CheckOut",
        previewUrl: "https://samanayaz.github.io/CheckOut/"
    },
    {
        id: 4,
        title: "Ping Pong App Design",
        description: "Project 3",
        image: "/projects/pingpong.png",
        tag: ["UIUX", "Web"],
        gitUrl: "https://xd.adobe.com/view/b5cecde4-5287-4529-9546-3751bdfe1086-e09d/?fullscreen",
        previewUrl: "https://xd.adobe.com/view/ee7257d9-88bd-44a4-a47c-a7a675292a21-bb21/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("FrontEnd");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <div>
            <>
                <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>
                    My Projects
                </h2>
                <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                    <ProjectTag onClick={handleTagChange}
                        name="FrontEnd"
                        isSelected={tag === "FrontEnd"}
                    />
                    <ProjectTag onClick={handleTagChange}
                        name="UIUX"
                        isSelected={tag === "UIUX"}
                    />
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12'>
                    {filteredProjects.map((project) => <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl} />)}
                </div>
            </>
        </div>
    )
}

export default ProjectSection
