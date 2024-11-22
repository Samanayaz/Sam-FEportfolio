import React from 'react'
import githubIcon from '../../public/github.svg';
import LinkedInIcon from '../../public/linked.svg';
import Link from 'next/link';
import Image from 'next/image';

const SimpleContact = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative items-center'>
            <div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900 to-transparent rounded-full h-80 w-80 z-0 blur-md absolute top-2/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>

            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] max-w-md mb-2'>
                    {' '}
                    I am currently looking for new opportunities, my inbox is always open. You can reach out me via call or email and I'll try my best to get back to you!
                </p>
              
            </div>

            <div className='flex flex-col text-center'>
                <h3 className='text-md font-bold text-[#ADB7BE] my-1'>Email: <span className='text-white'>samanmamdani@gmail.com</span></h3>
                <h3 className='text-md font-bold text-[#ADB7BE] my-1'>Phone: <span className='text-white'>(847) 630-2658</span> </h3>
                <h3 className='text-md font-bold text-[#ADB7BE] my-1'>Location: <span className='text-white'>Chicago, Illinois</span> </h3>
                <div className='socials flex flex-row gap-2 justify-center my-2'>
                    <Link href="https://github.com/Samanayaz">
                        <Image src={githubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/saman-ayaz-205a191a3/">
                        <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SimpleContact
