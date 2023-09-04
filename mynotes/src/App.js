import { BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NoteSingle from "./pages/NoteSingle";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route component={NotePage} path="/" exact />
        <Route component={NoteSingle} path="/note/:id" />
      </div>
    </Router>
  );
}


export default App;
