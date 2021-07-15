import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  useEffect(() => {
    document.title = "Jill Klatt Portfolio";  
  }, []);

  return (
    <div>
      <Router >
      <NavBar />
      <Intro />
      <Switch>

        <Route path='/' component={Intro}>
        <Route path='/#about' component={About} />
        <Route path='/#experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact}/>
        </Route>


      </Switch>
      <About />
      <Contact />
      <Experience />
      <Projects />

     </Router>
    </div>
  );
}

export default App;
