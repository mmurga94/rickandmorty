import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Characters from './components/Characters/Characters';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Favorites from './components/Favorites/Favorites';
import About  from './components/About/About';

function App() {
  return (
    <>
      <Route path='/' render={() => <Nav/>} />
      <Route exact path='/' render={() => <Characters />} />
      <Route path='/Character/:id' render={() => <CharacterDetail />} />
      <Route path='/favorites' render={() => <Favorites />} />
      <Route path='/about' render={() => <About />} />
    </>
  );
}

export default App;
