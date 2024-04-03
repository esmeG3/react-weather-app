import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather App</p>
      </header>
      <body>
        <Weather />
      </body>
      <footer>
        <p>
          This project was coded by{" "}
          <a href="https://github.com/esmeG3" target="_blank" rel="noreferrer">
            Esme G
          </a>{" "}
          and is open-sourced on {" "}
          <a
            href="https://github.com/esmeG3/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and is hosted on <a href=""> Netlify</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
