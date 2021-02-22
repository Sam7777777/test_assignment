import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import Person from "./Person/Person";
import Palette from "./Palette/Palette";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/palette" component={Palette} />
          <Route exact path="/" component={Person} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
