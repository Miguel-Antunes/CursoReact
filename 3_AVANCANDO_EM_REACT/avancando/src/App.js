
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

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }

  ]

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

        {cars.map(
          (car) => (
            <CarDetails brand={car.brand}
              color={car.color}
              km={car.km}
              newCar={car.newCar} />)
        )}
      </div>
    </div>
  );
}

export default App;
