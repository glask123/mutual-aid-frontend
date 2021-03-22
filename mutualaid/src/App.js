import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/splash";
import NewRequest from "./components/newrequest";
import Request from "./components/request";
import RequestSubmitted from "./components/requestsubmit";
import Login from "./components/login";
import Home from "./components/home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/splash" component={Splash} />
        <Route path="/about" />
        <Route path="/donate" />
        <Route path="/contact" />
        <Route path="/login" component={Login} />
        <Route exact path="/request" component={Request} />
        <Route path="/request/returning" />
        <Route path="/request/new" component={NewRequest} />
        <Route path="/request/submitted" component={RequestSubmitted} />
      </Switch>
    </Router>
  );
}

export default App;
