import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      
      <h1>Favorite Authors</h1>
      <hr/>
      
      <Switch>
        <Route path="/authors/update/:id">
          <UpdateAuthor/>
        </Route>

        <Route path="/authors/new">
          <NewAuthor/>
        </Route>

        <Route path="/authors">
          <AllAuthors/>
        </Route>

        <Route path="/">
          <Redirect to="/authors" />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
