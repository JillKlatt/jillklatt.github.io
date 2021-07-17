import './Projects.css'

function ProjectCard(props) {
    
    return(
        <div>
            <li>
                <div>
                <a href={props.path} className='project-pic'>
                    <figure className='pic-wrap' data-category={props.label}>
                    <img src={props.src} alt={props.alt}></img>
                    <div className='hide'>
                        {props.label}
                    </div>

                    </figure>
                </a>
                <h5>{props.title}</h5>
                </div>

            </li>
        </div>
    )
}

export default ProjectCard