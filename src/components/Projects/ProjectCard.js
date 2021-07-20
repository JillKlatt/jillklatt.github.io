import './Projects.css'

function ProjectCard({ title, path, src, alt, label, description }) {

    return (
        <>            
            <div class="project-details" >
                <a href={path} className='project-link'>
                    <img class="project-image" src={src} alt={alt} />
                    
                    <div class="project-description">
                        <h5 id='card-title'>{title}</h5>
                        <p>{description}</p>
                        <div id='card-label'>{label}</div> 
                    </div>
                    
                </a>  
            </div>
        </>
    )
}

export default ProjectCard