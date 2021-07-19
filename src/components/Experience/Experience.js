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
            <div className='experience-title'>
                <h3><span style={{ color: '#b07156' }}>&gt;</span> WORK EXPERIENCE</h3>

            </div>
            <div >
                <Tabs className='tabs'>
                    <TabList className='tablist'>
                        <Tab id='aldi'><h1>Aldi</h1></Tab>
                        <Tab id='noasis'><h1>Nature's Oasis</h1></Tab>
                        <Tab id='melt'><h1>Melt</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Assistant Manager - Mayfield Heights, OH</h2>
                        <ul className='job-description'>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Handled customer relations, complaints, and assistance.</li>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Oversaw daily operations, hiring and training staff, collaborating with vendors.</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Kitchen Manager - Lakewood, OH</h2>
                        <ul className='job-description'>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Coordinated and supervised staff according to food safety standards.</li>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Developed menu, including food cost analysis.</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Bar Manager - Columbus, OH</h2>
                        <ul className='job-description'>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Controlled the front of house image while ensuring customer satisfaction</li>
                            <li><span style={{ color: '#b07156' }}>&gt;</span> Managed staff scheduling, training, and organized liquor orders and invoicing.</li>
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )


}

export default Experience