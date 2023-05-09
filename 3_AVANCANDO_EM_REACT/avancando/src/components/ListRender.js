import { useState } from "react";
const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "João", age: 28},
        {id: 3, name: "Pedro", age: 44}
    ])
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user)=> randomNumber !== user.id)
        })
    }
    console.log(users)
    return (
        <div>
            <ul>
                {list.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((item)=> (
                    <li key={item.id}>{item.name} - {item.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}
export default ListRender;