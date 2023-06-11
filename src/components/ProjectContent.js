import '../assets/styles/ProjectContent.css'

function ProjectContent({title, description, images, ghLink, id}) {
    // const imgTag = images.map((i) => (<img className='image' src={i} />))
    

    return (
        <div className='project'>
            <h2 id={id}>{title}</h2>
            {/* Add photo gallery of projects use map*/}
            <img className='img' src={images} alt={title}/>
            <p>{description}</p>
            <div className='gitLink'>
                <h3>View Project here: </h3>
                <a href={ghLink} target='_blank'> Github Link</a>
            </div>
        </div>
    )
}

export default ProjectContent