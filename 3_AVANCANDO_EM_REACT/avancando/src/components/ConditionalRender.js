import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(false);


    const [name, setName] = useState("Maria");

    return (
        <div style={{ marginTop: "50px" }}>

            <div>
                <hr />

            </div>
            <div>
                <b>
                    <h1>
                        ConditionalRender
                    </h1>
                </b>
            </div>
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true, sim! </p>}
            {!x && <p>Agora x é falso </p>}
            <h3>If Ternario</h3>
            {name === "João" ? (
                <div>
                    <p>
                        O nome é João
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        o nome não é João
                    </p>
                </div>
            )}

            <button onClick={() => setName("João")}>
                Click-me
            </button>
        </div>
    )
}
export default ConditionalRender;
