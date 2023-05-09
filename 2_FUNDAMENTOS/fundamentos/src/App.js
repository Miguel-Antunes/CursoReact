import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpression from './components/TemplateExpression';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpression></TemplateExpression>
      <MyComponent></MyComponent>
      <Events></Events>
      <Challenge>
        
      </Challenge>
    </div>
  );
}

export default App;
