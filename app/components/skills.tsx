import Image from 'next/image'
import pythonIcon from '../../public/icons/python.svg'
import cppIcon from '../../public/icons/cpp.svg'
import flaskIcon from '../../public/icons/flask.svg'
import flutterIcon from '../../public/icons/flutter.svg'
import golangIcon from '../../public/icons/golang.svg'
import mongodbIcon from '../../public/icons/mongodb.svg'
import nextjsIcon from '../../public/icons/nextjs.svg'
import swiftuiIcon from '../../public/icons/swiftui.svg'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={pythonIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={cppIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C / C++</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={flaskIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Flask</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={flutterIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Flutter</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={golangIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Go</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={mongodbIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={nextjsIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl bg-[#2C2C33] hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={swiftuiIcon}
                                    width={64}
                                    height={64}
                                    alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SwiftUI</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills