import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
