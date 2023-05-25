import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          <li>Queijo</li>
          <li>Leite</li>
          <li>Pão</li>
        </ul>
      </div>
      <form className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" className="form-control" id="item" />
          </div>
          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
