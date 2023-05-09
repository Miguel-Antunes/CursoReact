const Challenge = () => {

    const n = 1;
    const x = 2;
const handleSoma = ()=> {
    console.log(`A soma de X + N é: ${x + n}`)
}
    return(
        <div>
        <h1>O valor de N é: {n}</h1>
        <h1>O valor de X é: {x}</h1>
        <div>
            <button onClick={handleSoma}>
                Soma X + N 
            </button>
        </div>
        </div>
     
    )

}
export default Challenge;
