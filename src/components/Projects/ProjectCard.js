import './Projects.css'

function ProjectCard(props) {
    
    return(
        <div>
                <div>
                <figure className='pic-wrap' data-category={props.label}>
                <a href={props.path} className='project-pic'>

                    <img src={props.src} alt={props.alt}></img>
                    <div className='hide'>
                        {props.label}
                    </div>


                </a>                    
                </figure>
                <h5>{props.title}</h5>
                </div>

        </div>
    )
}

export default ProjectCard