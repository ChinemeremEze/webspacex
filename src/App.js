import './App.css';
import { Launches } from './Launches';
import { Rocket } from './Rocket';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/">
                  <Launches />
                </Route>
            <Route path="/launches/:id">
              <Rocket />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
