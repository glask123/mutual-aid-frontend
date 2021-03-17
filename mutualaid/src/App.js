import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/splash";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Splash} />
      </Switch>
    </Router>
  );
}

export default App;
