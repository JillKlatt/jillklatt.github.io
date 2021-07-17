import './Experience.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CustomTab = ({ children }) => (
    <Tab>
      <h1>{children}</h1>
    </Tab>
  );


CustomTab.tabsRole = 'Tab';

function Experience() {



    return (
        <div id='experience'>
            <div className='title'>
                <h3><span style={{ color: '#b07156' }}>&gt;</span> EXPERIENCE</h3>

            </div>

            <h3 id='label'>SCHOOL</h3>
            <div >
                <Tabs className='tabs'>
                    <TabList className='tablist'>
                        <Tab id='flatiron'><h1>Flatiron</h1></Tab>
                        <Tab id='cscc'><h1>Columbus State Community College</h1></Tab>                      
                    </TabList>

                    <TabPanel>
                        <h2>Full Stack Software Engineering Program</h2>
                        <ul className='job-description'>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Solo projects</li>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Other stuff</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Columbus, OH</h2>
                        <ul>
                            <li><span style={{ color: '#b07156' }}>&gt;</span>American Sign Language, Deaf Studies Certificate</li>
                        </ul>
                    </TabPanel>
                </Tabs>

            </div>


            <h3 id='label'>WORK</h3>
            <div >
                <Tabs className='tabs'>
                    <TabList className='tablist'>
                        <Tab id='aldi'><h1>Aldi</h1></Tab>
                        <Tab id='noasis'><h1>Nature's Oasis</h1></Tab>                      
                        <Tab id='melt'><h1>Melt</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Assistant Store Manager - Mayfield Heights, OH</h2>
                        <ul className='job-description'>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Handled customer relations, complaints, and assistance.</li>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Oversaw daily operations, hiring and training staff, collaborating with vendors.</li>
                        </ul>

                    </TabPanel>
                    <TabPanel>
                        <h2>Kitchen Manager - Lakewood, OH</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Bar Manager - Columbus, OH</h2>
                        <ul>
                            <li><span style={{ color: '#b07156' }}>&gt;</span></li>
                            <li><span style={{ color: '#b07156' }}>&gt;</span></li>
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )


}

export default Experience