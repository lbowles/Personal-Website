import './App.css';

import Intro from "./components/Intro/Intro.tsx"
import About from './components/About/About.tsx'
import Skills from './components/Skills/Skills.tsx';
import Experience from './components/Experience/Experience.tsx';
import Education from './components/Education/Education.tsx';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div>
         
        </div>
        <div style={{marginBottom:"80px",paddingLeft:"10px",paddingRight:"10px"}}>
          <About></About>
        </div>
        <div style={{marginBottom:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
          <Skills></Skills>
        </div>
        <div style={{marginBottom:"45px",paddingLeft:"10px",paddingRight:"10px"}}>
          <div className='divider'></div>
          <Experience></Experience>
        </div>
        <div style={{marginBottom:"120px",paddingLeft:"10px",paddingRight:"10px"}}>
          <div className='divider'></div>
          <Education></Education>
        </div>
      </div>
    </div>
  );
}

export default App;
