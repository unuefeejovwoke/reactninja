
import './App.css';

function App() {
  const title = "Welcome to the blog";
  const link = "www.fortheeco.com"

  return (
    <div className="App">
      <div className="content">
        <h2>{title}</h2>
        <p>{Math.random() * 10}</p>

        <a href={link}>FORTHEECO</a>
      </div>
    </div>
  );
}

export default App;
