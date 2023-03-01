import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragments';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Meu site em React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={10} />
      <Fragment />
      <Container>
        <h1>Este é filho do container</h1>
        <p>oioi</p>
      </Container>
    </div>
  );
}

export default App;

