import { Routes, Route } from 'react-router-dom';
import OtherPage from './otherPage.js';
import PricingCard from './pricecard.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <header className="App-header">
              <h1>OS Ui Elements cause <i>why not</i></h1>
              <PricingCard title="Basic" price="$10" description="This is a basic plan" timeunit="month" buylink="https://google.com" learnmorelink="/otherpage" />
            </header>
          )}
        />
        <Route path="/otherpage" element={<OtherPage />} />
        { /*... other routes ... */ }
      </Routes>
    </div>
  );
}

export default App;