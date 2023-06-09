import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import profileImg from '../../public/profile.png'


const Main = () => {
    return (
        <div id='hero' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1>
                        Hi, I'm <span className='text-rose-500'>Daniel Amirtharaj</span>
                    </h1>
                    <Image className='mx-auto pt-4' src={profileImg} alt='/' height={300} />
                    <p className='max-w-[70%] m-auto py-4'>
                        I am a junior at Santa Clara University pursuing a B.S. in Computer Science and Engineering. I have experience with several programming languages and frameworks. In my free time, I enjoy weightlifting, hiking, and wrestling.
                    </p>
                    <div className='flex items-center justify-between max-w-[250px] m-auto'>
                        <div className=' rounded-3xl bg-[#2C2C33] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a target='_blank' href='https://www.linkedin.com/in/damirtharaj/' rel='noopener noreferrer'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className='rounded-3xl bg-[#2C2C33] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a target='_blank' href='https://github.com/damirtharaj0' rel='noopener noreferrer'>
                                <FaGithub />
                            </a>
                        </div>
                        <div className='rounded-3xl bg-[#2C2C33] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a target='_blank' href='mailto:damirtharaj1@gmail.com'>
                                <AiOutlineMail />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main