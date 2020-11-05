import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home';
import Word from './components/Word';
import Colors from './components/Colors';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Word path="/:word" />
        <Colors path="/:word/:textColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
