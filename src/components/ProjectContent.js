import '../assets/styles/ProjectContent.css'

function ProjectContent({title, description, images}) {
    return (
        <div className='project'>
            <h2>{title}</h2>
            {/* Add photo gallery of projects */}
            <p>{description}</p>
        </div>
    )
}

export default ProjectContent