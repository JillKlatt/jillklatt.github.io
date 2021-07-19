import './Projects.css'
import ProjectCard from './ProjectCard'


function Projects() {

    return (
        <div id='projects'>
            <div className='project-title'>
                <h3><span style={{ color: '#b07156' }}>&gt;</span> PROJECTS</h3>
            </div>
            <div className='project-content'>
                <div className='card-container'>

                    <ProjectCard title="Retail Therapy" path='https://retail-therapy.herokuapp.com' src='/retailtherapy.jpg' alt='Supermarket Aisle' label='React / Redux' tagline='Grocery Store Role Play Adventure' />
                    <ProjectCard title='DM Notebook' path='https://dm-notebook.herokuapp.com/' src='dmnotebook.png' alt="DM Notebook" label='Ruby on Rails' description='D&D Beyond Copy with Character, Campaign, and Weapon creation' />

                </div>
            </div>



        </div>
    )


}

export default Projects