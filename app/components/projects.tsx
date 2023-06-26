
import ProjectItem from './project-item'
import helpingHandImg from '../../public/helping-hand/homepage.png';
import workoutAppImg from '../../public/workout_app/workout.png'
import portfolioImg from '../../public/portfolio/portfolio.png'
import rdtImg from '../../public/rdt-3.0/rdt.png'

const Projects = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title='Helping Hand' backgroundImg={helpingHandImg} skills={['SwiftUI', 'Auth0', 'Flask', 'GPT-3 API', 'Apple Maps API']} />
                    <ProjectItem title='Workout App' backgroundImg={workoutAppImg} skills={['Flutter', 'Flask', 'MongoDB']} />
                    <ProjectItem title='Portfolio' backgroundImg={portfolioImg} skills={['Next.js', 'Tailwind CSS', 'Figma']} />
                    <ProjectItem title='RDT 3.0 implementation' backgroundImg={rdtImg} skills={['C', 'Socket Programming']} />
                </div>
            </div>
        </div>
    )
}

export default Projects