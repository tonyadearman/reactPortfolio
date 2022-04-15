import './App.css';
import About from "./components/about/About"
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact"

const App = ()  => {
  return (
    <div className="App">
      <Intro />
      <About />
      <Contact />
    
    </div>
  );
}

export default App;
