import React from 'react'

const Message = ({ msg }) => {
    return (
        <div style={{ marginTop: "50px" }}>
            <div>
                <hr />
            </div>
            <h3>A mensagem é: {msg}</h3>
        </div>
    )
}

export default Message
