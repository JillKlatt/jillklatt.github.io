import { HashLink as Link } from 'react-router-hash-link';
import './Intro.css'
import MediaQuery from 'react-responsive'

function Intro() {

  return (
    <div id='intro'>
      <div className='name'>
        <h1>JILL <span style={{ color: '#2E2C2F' }}>♦</span> KLATT</h1>
      </div>
      <div className='tagline'>
        <h3>Full Stack Software Engineer</h3>
      </div>
      <div className='bio'>
        <p>Experienced Ruby on Rails and React JS developer with a background in the service industry. <br></br>People-oriented individual with a positive attitude and strong interpersonal skills. </p>
      </div>
      <div className='intro-contact'>
        <a id='intro-email' class='intro-button' href='mailto:klatt.jill@gmail.com'>Send an Email</a>
        <Link id='intro-contact-scroll' class='intro-button' smooth to='#contact'>More Contact Options</Link>
      </div>
    </div>
  )


}

export default Intro

