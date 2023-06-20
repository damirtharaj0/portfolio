
import ProjectItem from './project_item'
import helpingHandImg from '../public/helping_hand/homepage.png';
import workoutAppImg from '../public/workout_app/workout.png'

const Projects = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <ProjectItem title='Helping Hand' backgroundImg={helpingHandImg} skills={['SwiftUI', 'Auth0', 'Flask', 'GPT-3 API', 'Apple Maps API']} />
                    <ProjectItem title='Workout App' backgroundImg={workoutAppImg} skills={['Flutter', 'Flask', 'MongoDB']} />
                </div>
            </div>
        </div>
    )
}

export default Projects