const TemplateExpression = () => {

    var nome = "Miguel";

    const dados = {
        idade: 21,
        profissao: "Desenvolvedor"
    }

    return(
        <div>

            <h1>
                Olá {nome}, Tudo bem?
            </h1>
            
            <p>
                Você atua como {dados.profissao}
            </p>
            <p>
                {4+4}
            </p>
            <p>
                {console.log("JSX React")}
            </p>
        </div>
    )
}
export default TemplateExpression;