import logo from './logo.svg';
import './App.css';
import CompA from './ejercicio-01/compA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CompA></CompA>
      </header>
    </div>
  );
}

export default App;
