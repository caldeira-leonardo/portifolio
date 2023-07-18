import About from 'components/About/about';
import Home from 'components/Home/home';
import Navbar from 'components/elements/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
