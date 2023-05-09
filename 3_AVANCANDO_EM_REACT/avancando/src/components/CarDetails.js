
const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div style={{ marginTop: "50px" }}>

            <div>
                <hr />
                <h1>
                    <b>
                        CarDetails
                    </b>
                </h1>
            </div>
            <div>
                <h3>Detalhes do Carro</h3>
                <ul>
                    <li>
                        Marca: {brand}
                    </li>
                    <li>
                        KM: {km}
                    </li>
                    <li>
                        Cor: {color}
                    </li>
                </ul>
                {newCar && <p>Este carro é novo</p>}
            </div>

        </div>
    )
}

export default CarDetails
