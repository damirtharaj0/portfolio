import Image from 'next/image';
import { Outfit } from 'next/font/google';

import profile from '../public/profile.png'

import flaskIcon from '../public/icons/flask.svg'
import swiftUIIcon from '../public/icons/swiftui.svg'
import nextJsIcon from '../public/icons/nextjs.svg'
import tailwindIcon from '../public/icons/tailwind.svg'
import mongoDbIcon from '../public/icons/mongodb.svg'
import flutterIcon from '../public/icons/flutter.svg'
import python from '../public/icons/python.svg'
import java from '../public/icons/java.svg'
import golang from '../public/icons/golang.svg'
import javascript from '../public/icons/javascript.svg'
import cppIcon from '../public/icons/cpp.svg'

import helpingHandHomepage from '../public/helping_hand/homepage.png'


const outfit = Outfit({ subsets: ['latin'] });

export default function Home() {
  return (
    <body className={outfit.className}>

      <div className='h-24'></div>

      <h1 className='text-center text-5xl tracking-wide'>I am
        <b> Daniel Amirtharaj</b>
      </h1>

      <div className='h-8'></div>

      <Image
        src={profile}
        width={352}
        height={352}
        alt='profile picture'
        className='mx-auto'
      />

      <div className='h-8'></div>

      <p className='text-justify leading-loose tracking-wide text-lg max-w-3xl mx-auto text-2xl'>I am a sophomore at Santa Clara University majoring in Computer Science and Engineering. I have experience with several programming languages and frameworks. In my free time, I enjoy weightlifting, hiking, and sneaker reselling.</p>

      <div className='h-16'></div>

      <div className='columns-11 max-w-4xl mx-auto'>
        <Image
          src={python}
          height={40}
          alt='python icon'
          className='mx-auto'
        />

        <Image
          src={java}
          height={40}
          alt='java icon'
          className='mx-auto'
        />

        <Image
          src={golang}
          height={40}
          alt='golang icon'
          className='mx-auto'
        />

        <Image
          src={javascript}
          height={40}
          alt='javascipt icon'
          className='mx-auto'
        />

        <Image
          src={cppIcon}
          height={40}
          alt='mongodb icon'
          className='mx-auto'
        />

        <Image
          src={flaskIcon}
          height={40}
          alt='flask icon'
          className='mx-auto'
        />

        <Image
          src={swiftUIIcon}
          height={40}
          alt='swiftui icon'
          className='mx-auto'
        />

        <Image
          src={nextJsIcon}
          height={40}
          alt='nextjs icon'
          className='mx-auto'
        />

        <Image
          src={tailwindIcon}
          height={40}
          alt='reactjs icon'
          className='mx-auto'
        />

        <Image
          src={mongoDbIcon}
          height={40}
          alt='mongodb icon'
          className='mx-auto'
        />

        <Image
          src={flutterIcon}
          height={40}
          alt='flutter icon'
          className='mx-auto'
        />
      </div>

      <div className='h-40'></div>

      <div className='columns-2 max-w-5xl mx-auto'>

        <div>
          <h1 className='text-5xl tracking-wide font-bold mx-auto'>Helping Hand
          </h1>
          <Image
            src={helpingHandHomepage}
            width={352}
            alt='profile picture'
          />
        </div>

        <div className=''>
          <div className='h-48'></div>
          <p className='text-justify leading-loose tracking-wide text-lg'>This iOS application provides resources and locations of opioid overdose prevention and where to get Narcan.</p>
          <ul className='list-disc list-inside text-lg'>
            <li className='font-bold'>SwiftUI</li>
            <li className='font-bold'>Auth0</li>
            <li className='font-bold'>Flask</li>
            <li className='font-bold'>GPT-3 API</li>
            <li className='font-bold'>Apple Maps API</li>
          </ul>
        </div>
      </div>

      <div className='h-40'></div>

    </body>
  )
}