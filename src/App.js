import logo from './logo.svg';
import './App.css';
import Clock2 from './components/container/clock2';
import Clock from './components/container/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock2></Clock2>
      </header>
    </div>
  );
}

export default App;
