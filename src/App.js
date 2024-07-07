import './App.css'
import './index.css';
import { ThemeProvider } from './components/ThemeContext';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Community from './components/Community';
import About from './components/About';
import Stats from './components/Stats';
import MoreAboutFooter from './components/MoreAboutFooter';
import Customers from './components/Customers';
import Blog from './components/Blog';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar/>
        <Landing/>
        <Clients/>
        <Community/>
        <About/>
        <Stats/>
        <MoreAboutFooter/>
        <Customers/>
        <Blog/>
        <Demo/>
        <Footer/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
