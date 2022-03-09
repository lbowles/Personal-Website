import './App.css';

import Intro from "./components/Intro/Intro.tsx"
import About from './components/About/About.tsx'
import Skills from './components/Skills/Skills.tsx';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Intro></Intro>
        <div style={{marginBottom:"80px"}}>
          <About></About>
        </div>
        <div style={{marginBottom:"6vh"}}>
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
}

export default App;
