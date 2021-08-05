import "./App.css";
import { Route } from "react-router-dom";
import ButtonHome from "./components/ButtonHome/ButtonHome.jsx";
import Home2 from "./components/Home/Home";
import Detalles from "./components/Detalles/Detalles";
import Crear from "./components/Crear/Crear";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ButtonHome} />
      <Route exact path="/home" component={Home2} />
      <Route
        exact
        path="/home/:PerroId"
        render={({ match }) => <Detalles perro={match.params.PerroId} />}
      />
      <Route exact path="/crear" component={Crear} />
    </div>
  );
}

export default App;
