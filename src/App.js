import logo from './logo.svg';
import './App.css';
import CompA from './ejercicio-01/compA';
import Clock from './ejercicio-02/classtofunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CompA></CompA> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
