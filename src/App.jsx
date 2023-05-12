import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import "./styles.css";
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer greeting={"Bienvenido a Organic Bites"} eslogan={"Naturaleza en cada plato"}/>
    <ItemCount inicial={1} stock={5} onAdd={(quantity) => console.log ("Cantidad agregada ", quantity)}/>
    </div>
  );
}

export default App;