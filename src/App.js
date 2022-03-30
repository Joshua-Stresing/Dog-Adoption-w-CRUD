import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ListOfDogs from './Views/Dogs/Doglist';
import DogDetails from './Views/DogDetails/DogDetails';
import AddDog from './Views/AddDog/AddDog';
// import Home from './Views/Main/Home';

function App() {
  return (
    <main className='Main'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ListOfDogs />
          </Route>
          <Route exact path="/dogs/new">
            <AddDog />
          </Route>
          <Route exact path="/dogs/:id/edit">
            <DogDetails />
          </Route>
          <Route exact path="/dogs/:id">
            <DogDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
