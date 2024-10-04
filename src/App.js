import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello fellow student!
        </h1>
        <p>
          This Create App is deployed on Render
        </p>
        <a
          className="App-link"
          href="https://github.com/Niemistoo/app-on-render"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
