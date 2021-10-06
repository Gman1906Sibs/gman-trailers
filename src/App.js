import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Landing from './components/Landing';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
