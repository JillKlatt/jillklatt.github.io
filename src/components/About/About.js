import './About.css'

function About() {

    const bullet = <span style={{ color: '#b07156' }}>♦ </span>

    return (
        <div id='about'>
            <div className='about-title'>
                <h3><span style={{ color: '#b07156' }}>&gt;</span> ABOUT ME</h3>
            </div>
            <div className='content'>
                <div id='about-text'>
                    <p id='location'>
                        Currently located in Cleveland, Ohio
                    </p>
                    <p>
                        In July 2021, I graduated Flatiron School's Software Enginnering Bootcamp. I've learned how to compentently work with:
                    </p>
                    <ul>
                        <li>{bullet}JavaScript (ES6+)</li>
                        <li>{bullet}React</li>
                        <li>{bullet}Ruby on Rails</li>
                        <li>{bullet}Sinatra</li>
                        <li>{bullet}SQL / PostgreSQL</li>
                        <li>{bullet}Redux</li>
                        <li>{bullet}HTML / CSS</li>
                        <li>{bullet}Git / Github</li>

                    </ul>
                    <p>Software Engineering gives me such an incredible gateway for creativity and efficiency. I've always strived to make logical and fun solutions to problems, and now I feel that I have the tools to do so in a functional and tangible way.
                        When I'm not coding, I enjoy spending time consuming and creating Dungeons and Dragons content and hiking with my two old, wonderful dogs.</p>
                </div>
                <div id='photo-div' className='prof-pic'>
                    <img id='prof-pic' src="/profpic.jpg" alt='Jill Klatt Profile Pic with an incredible, wonderful, sweet baby dog'></img>
                </div>
                <div className='pic-border'>

                </div>

                </div>
            </div>
            )
}

            export default About