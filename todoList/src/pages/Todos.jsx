import { useEffect, useRef, useState } from "react";
import axios from 'axios'


export default function Todos() {

    const url = 'http://faveo.uz:8080/api/v1/todos'
    const user = JSON.parse(localStorage.getItem('user'))

    const [state, setSatate] = useState([])

    useEffect(() => {
        axios.get(url, {
            headers: {
                'Authorization': "Bearer " + user.token
            }
        }).then(response => setSatate(response.data))

    }, [])




    const nameRef = useRef()

    const requestLogin = async () => {
        const body = {
            title: nameRef.current.value,
        }

        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const responsee = await axios.post(url, body, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            })
            setSatate([...state, responsee.data])
        }
        catch (err) {
            console.log(err)
        }

        setTodos()
    }


    const requestDelet = async (id) => {

        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const responsee = await axios.delete(url + `/${id}`, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            })
            setSatate(
                state.filter((value) => value.id !== id)
            )

        }
        catch (err) {
            console.log(err)
        }

    }



    const [todos, setTodos] = useState()

    return (
        <>
            <h1>Salom hurmatli {user.name}</h1>
            <input type="text" ref={nameRef} value={todos} />
            <button onClick={() => requestLogin()}>add</button>

            {
                state.map(item => (
                    <div className="boxxx" key={item.id}>
                        <h4>{item.title}</h4> <button onClick={() => requestDelet(item.id)}>none</button>

                    </div>

                ))
            }
        </>

    )

}

