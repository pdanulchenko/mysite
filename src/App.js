import logo from './logo.svg';
import './App.css';

function App() {

  function handleClick() {
    alert("alerting")
  }

  return (
    <div className="App">
      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          kysikou.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }
    </div>
  );
}

export default App;
