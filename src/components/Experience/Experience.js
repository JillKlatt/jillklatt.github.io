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

    const bullet = <span style={{ color: '#b07156' }}>&gt;  </span> 

    return (
        <div id='experience'>
            <div className='experience-title'>
                <h3>{bullet} WORK EXPERIENCE</h3>

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
                            <li>{bullet} Handled customer relations, complaints, and assistance.</li>
                            <li>{bullet} Developed and executed new training program for sales associates.</li>
                            <li>{bullet} Completed computerized daily inventory reports with exceptional attention to detail.</li>
                            <li>{bullet} Collaborated with vendors to ensure quality assurance and customer satisfaction.</li>
                            <li>{bullet} Oversaw warehouse inventory, including executing purchase orders and coordinating deliveries to other store locations.</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Kitchen Manager - Lakewood, OH</h2>
                        <ul className='job-description'>
                            <li>{bullet} Coordinated and supervised staff according to food safety standards.</li>
                            <li>{bullet} Developed menu, including food cost analysis.</li>
                            <li>{bullet} Orchestrated stock, quality, and waste management systems of food inventory.</li>
                            <li>{bullet} Worked directly with suppliers on product releases and promotional events.</li>

                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Bar Manager - Columbus, OH</h2>
                        <ul className='job-description'>
                            <li>{bullet} Controlled the front of house image while ensuring customer satisfaction.</li>
                            <li>{bullet} Resolved customer grievances and complaints.</li>
                            <li>{bullet} Managed staff scheduling, training, and conflict resolution.</li>
                            <li>{bullet} Handled liquor inventory, ordering, and invoicing for bar supplies.</li>
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )


}

export default Experience