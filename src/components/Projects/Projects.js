import './Projects.css'
import ProjectCard from './ProjectCard'


function Projects() {

    return (
        <div id='projects'>
            <div className='title'>
                <h3><span style={{ color: '#b07156' }}>&gt;</span> PROJECTS</h3>
            </div>
        
                <div className='card-container'>
                    <ProjectCard title="Retail Therapy" path='https://retail-therapy.herokuapp.com' src='/retailtherapy.jpg' alt='Supermarket Aisle' label='React / Redux' description='Grocery Store Role Play Adventure' />
                    <ProjectCard title='DM Notebook' path='https://dm-notebook.herokuapp.com/' src='/dmnotebook3.png' alt="DM Notebook" label='Ruby on Rails' description='D&D Beyond Copy with Character, Campaign, and Weapon creation' />
                    <ProjectCard title="Interpreter Connection" path='https://www.youtube.com/watch?v=wp_YVFNdPhA&ab_channel=JillKlatt' src='/icelogo.png' alt="JS Logo" label='Vanilla JavaScript' description='Educational single page application that displays available interpreters for various cities and languages' />
                    <ProjectCard title='Character Creator' path='https://www.loom.com/share/440b64a1af284b43a1eefcf6b5d323a4' src='/charactersheet2.png' alt='Sinatra Logo' label='Sinatra' description='Basic Character Creator' />
                    <ProjectCard title='This Website' path='https://github.com/JillKlatt/jillklatt.github.io' description='Template Design and Inspo' src='/jklogo2.png' alt='github logo' label='React / Github Pages' />
                </div>
        </div>
    )


}

export default Projects