import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ListOfDogs from './Views/Dogs/Doglist';
// import Home from './Views/Main/Home';

function App() {
  return (
    <main className='Main'>
      <h1>List of Dogs</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <ListOfDogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
