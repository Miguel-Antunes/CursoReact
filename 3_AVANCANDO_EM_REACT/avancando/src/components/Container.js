const Container = ({ children }) => {
    return (
        <div style={{ marginTop: "50px" }}>
            <div>
                <hr />

            </div>
            <h2>
                Este é o Título do container
                {children}
            </h2>
        </div>
    )
}
export default Container;