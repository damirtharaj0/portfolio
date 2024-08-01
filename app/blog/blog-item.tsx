import Image, { StaticImageData } from 'next/image'

const BlogItem = ({ title, backgroundImg, description, href }: { title: string, backgroundImg: StaticImageData, description: string, href: string }) => {
    return (
        <a target='_blank' href={href} rel='noopener noreferrer'>
            <div className='group flex justify-center items-center h-auto w-full shadow-lg border-2 border-[#2C2C33] rounded-xl p-4 relative hover:cursor-pointer'>
                <Image className='group-hover:opacity-10 w-auto h-[200px] lg:h-[310px]' src={backgroundImg} alt='/' />
                <div className='hidden group-hover:block absolute justify-center items-center px-8'>
                    <h2 className='text-center pb-2'>{title}</h2>
                    <p className='text-justify'>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default BlogItem