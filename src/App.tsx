import About from 'components/About/about';
import Home from 'components/Home/home';
import Navbar from 'components/elements/Navbar/navbar';
import SocialMedia from 'components/elements/SocialMedia/socialMedia';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <SocialMedia />
    </div>
  );
}

export default App;
