import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ListOfDogs from './Views/Dogs/Doglist';
import DogDetails from './Views/DogDetails/DogDetails';
import AddDog from './Views/AddDog/AddDog';
import EditPage from './Views/EditDog/EditDog';
import Auth from './Views/Auth/Auth';
import { useState } from 'react';
import { getUser } from './services/auth';
import Header from './Comps/Header';
// import Home from './Views/Main/Home';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <main className='Main'>
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser}/>
          </Route>

          <Route exact path="/">
            <ListOfDogs />
          </Route>

          <Route exact path="/dogs/new">
            {currentUser ? <AddDog /> : <Redirect to = "/auth"/>}
          </Route>

          <Route exact path="/dogs/:id/edit">
            {currentUser ? <EditPage /> : <Redirect to = "/auth"/>}
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