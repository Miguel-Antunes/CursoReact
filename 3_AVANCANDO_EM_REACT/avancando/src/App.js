
import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const [userName] = useState("Maria")
  const idade = 15;

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="./img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Miguel" idade={idade} userName={userName} />
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
        <CarDetails brand="Ford" km={0} color="Azul" newCar={true} />
        <CarDetails brand="Fiat" km={4500} color="Azul" newCar={false} />
      </div>
    </div>
  );
}

export default App;
