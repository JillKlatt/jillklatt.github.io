import './Contact.css'

function Contact() {

    return (
        <div id='contact' >
            <div className='title'>
                <h3>CONTACT ME</h3>
            </div>
            <div className='contact-content'>
                <div className='email'>
                    <a class='button' href='mailto:klatt.jill@gmail.com'>klatt.jill@gmail.com</a>
                </div>
                <div className='socials'>
                    <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/jill-klatt-39b2a9200/' >
                            <img src='/linkinlogo.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/JillKlatt'>
                            <img src='/githublogo.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://dev.to/jillklatt'>
                            <img src='/devlogo.png'/>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact