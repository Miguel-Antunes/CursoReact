
const UserDetails = ({ nome, idade, profissao }) => {

    return (
        <div>
            <ul >
                <li >Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
                <li>
                    {idade >= 18 ? (
                        <div>
                            <p style={{ color: "green" }}>
                                Apto a tirar CNH
                            </p>
                        </div>
                    ) :
                        (<p style={{ color: "red" }}> Não está apto a tirar CNH </p>)}
                </li>
                <li>
                    -------------------------------------
                </li>
            </ul>
        </div>

    )

}
export default UserDetails;