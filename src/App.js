import './App.css'
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className='body'>
      <Router >
      <NavBar />
      <Intro />
      <div >
      <Switch>

        <Route path='/#' component={Intro}>
        <Route path='/#about' component={About} />
        <Route path='/#projects' component={Projects} />
        <Route path='/#experience' component={Experience} />
        <Route path='/#contact' component={Contact}/>
        </Route>

      </Switch>
      <About />
      <Projects />
      <Experience />
      <Contact />
      </div>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
