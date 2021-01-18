import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
function App() {
  return (
    <Router>
    <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    
    </div>
    </Router>
  );
}

export default App;


