import '../assets/styles/Container.css'
import Header from '../components/Header'
import ProjectContent from '../components/ProjectContent'

function Projects() {
    return (
        <div>
            <Header text='projects' size={200}/>
            <div className='Container'>
                <div className='ems_proj'>
                    <ProjectContent 
                        title='Employee Manager' 
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                    />
                </div>
                <div className='ems_proj'>
                    <ProjectContent 
                        title='Employee Manager' 
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                    />
                </div>
                <div className='ems_proj'>
                    <ProjectContent 
                        title='Employee Manager' 
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                    />
                </div>
                <div className='ems_proj'>
                    <ProjectContent 
                        title='Employee Manager' 
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                    />
                </div>
                <div className='ems_proj'>
                    <ProjectContent 
                        title='Employee Manager' 
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                    />
                </div>
                <div id='ems_proj1'>
                    <ProjectContent 
                        title='Employee Manager' 
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects