import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Currently building this, give me a moment.
        </p>
        <a
          className="Github"
          href="https://github.com/EthicalChaos"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my code projects
        </a>
      </header>
    </div>
  );
}

export default App;
