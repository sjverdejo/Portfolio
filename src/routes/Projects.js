import '../assets/styles/Projects.css'
import Header from '../components/Header'
import ProjectContent from '../components/ProjectContent'

function Projects() {
    return (
        <div>
            <Header text='projects' size={200}/>
            <div className='projects_Container'>
                <div className='ems_proj'>
                    <ProjectContent title='Employee Manager' description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, Tailwind' />
                </div>
            </div>
        </div>
    )
}

export default Projects