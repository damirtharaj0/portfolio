import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <p>Daniel Amirtharaj</p>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='#hero'>
                            <li className='ml-10 text-sm hover:border-b'>About</li>
                        </Link>
                        <Link href='#skills'>
                            <li className='ml-10 text-sm hover:border-b'>Skills</li>
                        </Link>
                        <Link href='#projects'>
                            <li className='ml-10 text-sm hover:border-b'>Projects</li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;