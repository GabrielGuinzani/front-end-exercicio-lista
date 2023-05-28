import "./App.css";
import Card from "./components/Card";
import Lista from "./components/Lista";

function App() {
  return (
    <div className="App">
      <Card text="Lista de Compras:"/>
      <Lista />
    </div>
  );
}

export default App;
