import "./App.css";
import CardList from "./components/CardList";
import CardData from "./Cards";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" className="HomePage">
      <h4>welcome to memory game</h4>
      {/* <Home /> */}
      <CardList />
    </div>
  );
}

export default App;
