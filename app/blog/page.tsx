import BlogItem from './blog-item';

import helpingHandImg from 'public/helping-hand/homepage.png';
import workoutAppImg from 'public/workout_app/workout.png'
import portfolioImg from 'public/portfolio/portfolio.png'
import rdtImg from 'public/rdt-3.0/rdt.png'

export default function Page() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='grid md:grid-cols-2 gap-8'>
                    <BlogItem title='Helping Hand' backgroundImg={helpingHandImg} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." href='https://devpost.com/software/helping-hand-vif9x8' />
                    <BlogItem title='Workout App' backgroundImg={workoutAppImg} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." href='https://github.com/damirtharaj0/workoutapp' />
                    <BlogItem title='Portfolio' backgroundImg={portfolioImg} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." href='' />
                    <BlogItem title='RDT 3.0 implementation' backgroundImg={rdtImg} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." href='https://github.com/damirtharaj0/reliable_udp_protocol' />
                </div>
            </div>
        </div>
    )
}