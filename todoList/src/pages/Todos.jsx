import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import Modal from "../components/Modal";
import Box from "../components/Box";
import Add from "../components/Add";


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
    const [modal, setModal] = useState({
        open: false,
        data: {}
    })

    async function putData(id) {
        console.log(id);
        const body = {
            title: up.value,
        }

        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const responsePut = await axios.put(url + `/${id}`, body, {
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

    }

    return (
        <>
            <h1>Salom hurmatli {user.name}</h1>
            <Add nameRef={nameRef} todos={todos} requestLogin={requestLogin} />
            <Modal modal={modal} setSatate={setSatate} putData={putData} setModal={setModal} />
            {
                state.map(item => (
                    <Box item={item} requestDelet={requestDelet} setModal={setModal} />
                ))
            }
        </>

    )

}

