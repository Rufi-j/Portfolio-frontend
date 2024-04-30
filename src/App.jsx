import AboutMe from './components/aboutme/AboutMe';
import './app.css';
import Topbar from './components/topbar/Topbar';
import Contact from './components/contact/Contact';
import Projectlist from './components/projectList/Projectlist';
import Skills from './components/skills/Skills';

function App() {
  
  return (
    <div className="app">
        
        <Topbar />
      <div className="sections">
        <AboutMe />
        <Skills />
        <Projectlist />
        <Contact />
      </div>
    </div>
  );
}

export default App;
