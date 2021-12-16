import './App.css';
import Pages from './pages';
import {BrowserRouter as Router} from "react-router-dom";
import Ascii from "./components/Ascii"
import Akirapages from './components/akirapages';

function App() {
  return (
    <Router> 
      <Akirapages/>
    </Router>
  );
}

export default App;
