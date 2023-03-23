import logo from './logo.svg';
import './App.css';
import donenoti from './donenoti.js';
import errornoti from './errornoti.js';
import infonoti from './infonoti.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p><code>HTML I </code></p>
        {donenoti("Title", "Description")}
        {errornoti("Title", "Description")}
        {infonoti("Title", "Description")}
      </header>
    </div>
  );
}

export default App;
