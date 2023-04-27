import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import "./styles.css";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer greeting={"Bienvenido a Organic Bites"} eslogan={"Naturaleza en cada plato"}/>
    </div>
  );
}

export default App;