import './Projects.css'

function ProjectCard({ title, path, src, alt, label, description }) {

    return (
        <>            
            <div class="project-details" >
                <a href={path} className='project-link'>
                    <img class="project-image" src={src} alt={alt} />
                    
                    <div class="project-description">
                        <h5>{title}</h5>
                        <p>{description}</p>
                        {label} 
                    </div>
                    
                </a>  
            </div>
        </>
    )
}

export default ProjectCard