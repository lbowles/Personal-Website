import './App.css';

import Intro from "./components/Intro/Intro.tsx"
import About from './components/About/About.tsx';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div style={{marginTop:"10vh",marginBottom:"6vh"}}>
        <Intro></Intro>
        </div>
        <About></About>
      </div>
    </div>
  );
}

export default App;
