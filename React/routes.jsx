import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Test from "./pages/TestePerson/Test";
import Tela4 from "./pages/TesteTecnico/Tela4";
import Principal from "./pages/Principal/Principal";
import Final from "./pages/Concluir/Final";

const Rotas = () => {
  return (
    <Router>
      <div>
        <ul style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:'space-between'
        }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Tela4">Teste de Técnico</Link>
          </li>
          <li>
            <Link to="/Test">Teste de Personalidade</Link>
          </li>
          <li>
            <Link to="/Concluir/Final">Final</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route  path="/Tela4">
            <Tela4 />
          </Route>
          <Route path="/Test">
            <Test />
          </Route>
          <Route path="/Concluir/Final">
            <Final />
          </Route>
          <Route exact path="/">
            <Principal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Rotas;
