import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/*CSS Global */}
      <h1>React com CSS</h1>


      {/*CSS do Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
    </div>
  );
}

export default App;
