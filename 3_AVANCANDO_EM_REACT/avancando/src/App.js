
import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const [userName] = useState("Maria")
  const idade = 15;

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }

  ]
  const [message, sertMessage] = useState("");
  const handleMessage = (msg) => {
    sertMessage(msg);
  }

  function showMessage() {
    console.log("Evento do componente pai")
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/*imagem em public */}
      <div>
        <img src="./img1.jpg" alt="Paisagem" />
      </div>

      {/*imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />

        {/*props */}
        <ShowUserName name="Miguel" idade={idade} userName={userName} />

        {/*destruturing*/}
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />

        {/*reaproveitando*/}
        <CarDetails brand="Ford" km={0} color="Azul" newCar={true} />
        <CarDetails brand="Fiat" km={4500} color="Azul" newCar={false} />

        {/*loop em Array de objetos*/}
        {cars.map(
          (car) => (
            <CarDetails
              key={car.id}
              brand={car.brand}
              color={car.color}
              km={car.km}
              newCar={car.newCar} />)
        )}

        {/*Fragment*/}
        <Fragment />

        {/*Children*/}
        <Container>
          <p>
            Este é o conteúdo
          </p>
        </Container>

        {/*Executar Função*/}
        <ExecuteFunction myFunction={showMessage} />

        {/*State lift*/}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>

    </div>
  );
}

export default App;
