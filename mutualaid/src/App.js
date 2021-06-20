import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/splash";
import NewRequest from "./components/requests/newrequest";
import Request from "./components/requests/request";
import RequestSubmitted from "./components/requests/requestsubmit";
import Login from "./components/login";
import Home from "./components/home";
import Contact from "./components/contact";
import Admin from "./components/admin";
import Nav from "./components/nav";
import Returning from "./components/requests/returning";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/splash" component={Splash} />
        <Route path="/about" />
        <Route path="/donate" />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route exact path="/request" component={Request} />
        <Route path="/request/returning" component={Returning} />
        <Route path="/request/new" component={NewRequest} />
        <Route path="/request/submitted" component={RequestSubmitted} />
      </Switch>
    </Router>
  );
}

export default App;
