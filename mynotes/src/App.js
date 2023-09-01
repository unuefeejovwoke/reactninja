import { BrowserRouter as Router,Route,} from "react-router-dom";

import Header from './components/Header';
import NotePage from './pages/NotePage';
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Route component={NotePage} path="/" exact />
      </div>
    </Router>
    
  );
}

export default App;
