import { HashLink as Link } from 'react-router-hash-link';
import './Intro.css'

function Intro() {

    return (
      <div id='intro'>
        <h2>Jill Klatt</h2>
        <h3>Full Stack Software Engineer</h3>

        <div className='intro contact'>
          <a href='mailto:klatt.jill@gmail.com'>Send an email</a>
          <Link to='#contact'>More Contact Options</Link>
        </div>
      </div>
    )


} 

export default Intro