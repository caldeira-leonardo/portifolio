import About from 'components/About/about';
import Contact from 'components/Contact/contact';
import Footer from 'components/Footer/footer';
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
      <Contact />
      <Footer />
      <SocialMedia />
    </div>
  );
}

export default App;
