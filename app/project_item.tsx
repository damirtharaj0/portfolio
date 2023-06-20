
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

const ProjectItem = ({ title, backgroundImg, skills }: { title: string, backgroundImg: StaticImageData, skills: Array<string> }) => {
    return (
        <div className='relative flex cols-2 items-center h-auto w-full shadow-lg border-2 border-[#2C2C33] rounded-xl p-4 group hover:bg-gradient-to-r from-[#2C2C33] to-[#414162]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={250} />
            <div className='px-4 group-hover:opacity-10'>
                <h2>{title}</h2>
                <ul className="list-disc list-inside py-4">
                    {skills.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='pb-4 pt-2 text-white text-center'>Learn More</h3>
            </div>
        </div>
    )
}

// const ProjectItem = ({title, backgroundImg, projectUrl}: { title: string, backgroundImg: StaticImageData, projectUrl: string }) => {
//     return (
//         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
//             <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={300}/>
//             <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//                 <h3 className='text-2xl; text-white tracking-wider text-center'>{title}</h3>
//                 <p className='pb-4 pt-2 text-white text-center'>SwiftUI</p>
//                 <Link href={projectUrl}>
//                     <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
//                 </Link>
//             </div>
//         </div>
//     )
// }

export default ProjectItem