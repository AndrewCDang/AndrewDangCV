// Importing components, bootstrap, and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header';
import './header.css';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Animation from './animation';


// Main function App() which contains all the seperate components
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Applying CSS animations on scroll classes */}
        <Header/>
        <About/>
        <Experience/>
        <Skills/>
      </header>
      <Animation/>
    </div>
  );
}
// Calling app()
export default App;
