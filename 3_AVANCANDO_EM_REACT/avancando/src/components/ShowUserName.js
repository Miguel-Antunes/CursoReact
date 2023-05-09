const ShowUserName = (props) => {

    return (
        <div style={{ marginTop: "50px" }}>

            <div>
                <hr />

            </div>
            <div>
                <b>
                    <h1>
                        ShowUserName
                    </h1>
                </b>
            </div>

            <h3>
                O nome do usuário é: {props.name}

            </h3>
            <h3>
                Idade é : {props.idade}
            </h3>

            <h3>
                UserName é : {props.userName}
            </h3>
        </div>
    )
}
export default ShowUserName;
