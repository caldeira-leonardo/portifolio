import About from 'components/About/about';
import Home from 'components/Home/home';
import Projects from 'components/Projects/projects';
import Navbar from 'components/elements/Navbar/navbar';
import SocialMedia from 'components/elements/SocialMedia/socialMedia';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialMedia />
    </div>
  );
}

export default App;
