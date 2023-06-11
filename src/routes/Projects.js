import '../assets/styles/Container.css'
import Header from '../components/Header'
import ProjectContent from '../components/ProjectContent'
import portfolio from '../assets/images/projects/portfolio.png'
import taskme from '../assets/images/projects/taskme.png'
import NavLink from '../components/NavBar/NavLink'

function Projects() {
    return (
        <div className='page_Container'>
            <Header text='projects' size={200}/>
            <div className='cntr'>
                    <NavLink isText={true} text='click here to contact me.' link='/contact'/>
            </div>
            <div className='Container'>
                <div className='ems_proj'>
                    <ProjectContent id='portfolio'
                        title='Portfolio Website' 
                        images={portfolio}
                        description='Website for personal project created using React, CSS, React-Router v6, and framer motion'
                        ghLink='https://github.com/sjverdejo/Portfolio'
                    />
                    <hr />
                    
                    
                    <ProjectContent id='taskme'
                        title='TaskME' 
                        images={taskme}
                        description='A simple CRUD application for a user to track tasks to be completed and when to be completed by. Made using React, Express, Node, PostgreSQL, HTML, CSS.'
                        ghLink='https://github.com/sjverdejo/TaskME'
                    />
                    <hr />

                    <ProjectContent id='ems'
                        title='Employee Manager' 
                        images={portfolio}
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                        ghLink='https://github.com/sjverdejo/Employee-Management-System'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects