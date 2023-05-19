import axios from "axios";
import { useRef } from "react";

export default function Modal({modal ,  setModal, setSatate }){

    const inputRef = useRef(null)

    const url = 'http://faveo.uz:8080/api/v1/todos'
    async function putData(item) {
        const body = {
            title: inputRef.current.value,
        }

        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const responsePut = await axios.put(url + `/${item.id}`, body, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            })
            const newTodo = responsePut.data
            setSatate(prev => prev.map(todo => todo.id == newTodo.id ? newTodo : todo))
        }
        catch (err) {
            console.log(err)
        }

        setModal({
            open:false,
            data:{},
        })
        console.log(modal);

    }
    return(
        <div className={modal.open ? 'modal' : 'none'}>
        <div className="modal2">
            <input ref={inputRef} type="text" defaultValue={modal.data.title}/>
            <button onClick={() => putData(modal.data)}>yes</button>
            <button onClick={() => setModal({
                open: false,
                data: {}
            })}>exit</button>
        </div>
    </div>
    )
}