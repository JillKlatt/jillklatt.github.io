import './Projects.css'
import ProjectCard from './ProjectCard'


function Projects() {

    return (
        <div id='projects'>
            <div className='title'>
            <h3><span style={{ color: '#b07156' }}>&gt;</span> PROJECTS</h3>
            </div>
        <div className='project-content'>
            <div className='project-cards'>
                <ul>
                    <ProjectCard title="Retail Therapy" path='https://retail-therapy.herokuapp.com' src='/retailtherapy.jpg' alt='Supermarket Aisle' label='Grocery Store Role Play Adventure' />
                    <ProjectCard title='DM Notebook' path='https://dm-notebook.herokuapp.com/' src='dmnotebook.png' alt="DM Notebook" label='D "ffof" D Beyond Copy with Character, Campaign, and Weapon creation'/>
                </ul>
            </div>
        </div> 
        </div>
    )


} 

export default Projects