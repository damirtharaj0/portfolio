
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

const ProjectItem = ({ title, backgroundImg, skills }: { title: string, backgroundImg: StaticImageData, skills: Array<string> }) => {
    return (
        <div className='relative flex cols-2 items-center h-auto w-full shadow-lg border-2 border-[#2C2C33] rounded-xl p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl' src={backgroundImg} alt='/' height={500} />
            <div className='px-4'>
                <h2>{title}</h2>
                <ul className="list-disc list-inside py-4">
                    {skills.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectItem