
import Image, { StaticImageData } from 'next/image'

const ProjectItem = ({ title, backgroundImg, skills }: { title: string, backgroundImg: StaticImageData, skills: Array<string> }) => {
    return (
        <div className='group flex justify-center items-center h-auto w-full shadow-lg border-2 border-[#2C2C33] rounded-xl p-4 relative'>
            <Image className='group-hover:opacity-10 w-auto h-[200px] lg:h-[310px]' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute justify-center items-center'>
                <h2>{title}</h2>
                <ul className='list-disc list-inside py-4'>
                    {skills.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectItem