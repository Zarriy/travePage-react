import Card from "./components/Card";
import logo from "./assets/globe.png";
import data from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="world map logo" />
        <h1>my travel journal.</h1>
      </header>

      {data.map((log) => (
        <Card
          country={log.country}
          title={log.loc}
          image={log.imageSrc}
          data={log.period}
          description={log.description}
        />
      ))}
    </div>
  );
}

export default App;
