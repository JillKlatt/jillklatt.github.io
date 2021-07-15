import { HashLink as Link } from 'react-router-hash-link';
import './Intro.css'

function Intro() {

    return (
        <div>
        <h2>Jill Klatt</h2>
        <h3>Full Stack Software Engineer</h3>
        <Link to='#contact'>Contact Section</Link>
        <a href='mailto:klatt.jill@gmail.com'>Send an email</a>
        {/* <button onPress={() => Linking.openURL('mailto:klatt.jill@gmail.com') }
      title="support@example.com" /> */}
        </div>
    )


} 

export default Intro