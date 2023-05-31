import '../assets/styles/Container.css'
import Header from '../components/Header'
import ProjectContent from '../components/ProjectContent'
import img from '../assets/images/projects/portfolio.png'

function Projects() {
    return (
        <div className='page_Container'>
            <Header text='projects' size={200}/>
            <div className='Container'>
                <div className='ems_proj'>
                    <ProjectContent 
                        title='Portfolio Website' 
                        images={img}
                        description='Website for personal project created using React, CSS, React-Router v6, and framer motion'
                        ghLink='https://github.com/sjverdejo/Portfolio'
                    />
                    <hr />

                    <ProjectContent 
                        title='Employee Manager' 
                        images={img}
                        description='An application to help employers manage their employees. Created using React, Express, PostgreSQL, Node, TailwindCSS'
                        ghLink='https://github.com/sjverdejo/Employee-Management-System'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects