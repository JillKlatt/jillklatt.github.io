import './Projects.css'

function ProjectCard(props) {
    
    return(
        <div>
                <div className='card-item'>
                <figure class="img__wrap" >
                <a href={props.path} className='project-link'>

                  

                <img class="img__img" src={props.src} />
                <p class="img__description">{props.label}</p>
                </a>  
                    <h5>{props.title}</h5>                        
                    <p>{props.tagline}</p>
                    <p>{props.description}</p>
                </figure>
                </div>
        </div>
    )
}

export default ProjectCard