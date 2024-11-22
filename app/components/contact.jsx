import React from 'react';
import githubIcon from '../../public/github.svg';
import LinkedInIcon from '../../public/linked.svg';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
          <div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] max-w-md mb-2'>
                    {' '}
                    I am currently looking for ne wopportunities, my inbox is always open. You can reach out me and  I'll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/Samanayaz">
                        <Image src={githubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/saman-ayaz-205a191a3/">
                        <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor="email" className="text-white blocl text-sm font-medium mb-3" >Your Email</label>
                    <input type="email" id='email' required placeholder='abc@google.com' className='bg-[#18191e] border border-[#33353f] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                </div>

                <div className='mb-6'>
                    <label htmlFor="subject" className="text-white blocl text-sm font-medium mb-3" >Your subject</label>
                    <input type="text" id='subject' required placeholder='Hello' className='bg-[#18191e] border border-[#33353f] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                </div>

                <div className='mb-6'>
                    <label
                        className="text-white blocl text-sm font-medium mb-3"
                        htmlFor='message'>Message</label>
                    <textarea name="message"
                        id="message"
                        className='bg-[#18191e] border border-[#33353f] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required placeholder="Let's talk about ..."></textarea>
                </div>

                <button className='bg-teal-800 hover:bg-teal-700 text-white font-bold rounded-lg py-2.5 px-5 w-full'>Send Message</button>

            </div>
        </section>
    )
}

export default Contact
