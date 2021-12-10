import './App.css';
import Pages from './pages';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router> 
      <Pages/>
    </Router>
  );
}

export default App;
