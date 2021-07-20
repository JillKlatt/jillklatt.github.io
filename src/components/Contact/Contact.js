import './Contact.css'
import ContactForm from './ContactForm'

function Contact() {

    return (
        <div id='contact' >
            <div className='contact-title'>
                <h3><span style={{ color: '#b07156' }}>&gt;</span> CONTACT ME</h3>
            </div>
            <div className='contact-content'>
                <div className='socials'>
                    <ul>
                        <li>
                            <a id='contact-email' href='mailto:klatt.jill@gmail.com'>klatt.jill@gmail.com</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/jill-klatt-39b2a9200/' >
                                <img src='/linkinlogo.png' alt='linkedinlogo' />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/JillKlatt'>
                                <img src='/githublogo.png' alt='github logo' />
                            </a>
                        </li>
                        <li>
                            <a href='https://dev.to/jillklatt'>
                                <img src='/devlogo.png' alt='dev-blog logo' />
                            </a>
                        </li>
                    </ul>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact