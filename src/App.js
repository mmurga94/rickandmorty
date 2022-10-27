import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Characters from './components/Characters/Characters';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

function App() {
  return (
    <>
      <Route path='/' render={() => <Nav/>} />
      <Route exact path='/' render={() => <Characters />} />
      <Route path='/Character/:id' render={() => <CharacterDetail />} />
    </>
  );
}

export default App;
