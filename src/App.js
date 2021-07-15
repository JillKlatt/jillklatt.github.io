import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects';
import Experience from './components/Experience'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  useEffect(() => {
    document.title = "Jill Klatt Portfolio";  
  }, []);

  return (
    <div>
      <Router >
      <NavBar />
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
      <Contact />

     </Router>
    </div>
  );
}

export default App;
