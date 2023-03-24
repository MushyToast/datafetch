import logo from './logo.svg';
import './App.css';
import donenoti from './donenoti.js';
import errornoti from './errornoti.js';
import infonoti from './infonoti.js';
import pricingCard from './pricecard.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Some UI Elements I made (fully mobile compatible, open source)
        </p>
        <p>Github -- <a href="https://github.com/MushyToast/ui">Github</a></p>
        {donenoti("title", "description")}
        {errornoti("title", "description")}
        {infonoti("title", "description")}
        {pricingCard("professional edition", "$19.99", "It is very much professional", "month", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
      </header>
    </div>
  );
}

export default App;
