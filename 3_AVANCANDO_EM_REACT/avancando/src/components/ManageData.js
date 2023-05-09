import { useState } from 'react';

function ManageData() {
    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number);
    return (
        <div style={{ marginTop: "50px" }}>


            <div>
                <hr />

            </div>
            <div>
                <b>
                    <h1>
                        ManageData
                    </h1>
                </b>
            </div>

            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar Variável</button>
            </div>

            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar o State</button>
            </div>


        </div>
    )
}

export default ManageData
