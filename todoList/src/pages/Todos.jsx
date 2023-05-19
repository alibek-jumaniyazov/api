    import { useEffect, useRef, useState } from "react";
    import axios from 'axios'
    import Modal from "../components/Modal";
    import Box from "../components/Box";
    import Add from "../components/Add";
    import Search from "../components/Search";


    export default function Todos() {


        // Api url

        const url = 'http://faveo.uz:8080/api/v1/todos'

        // LocalStorage accaunt info

        const user = JSON.parse(localStorage.getItem('user'))




        // States

        const [state, setSatate] = useState([])
        const [todos, setTodos] = useState()
        const [modal, setModal] = useState({
            open: false,
            data: {}
        })

        // States end




        // Ref

        const nameRef = useRef()

        // Ref end






        // Get medoth

        useEffect(() => {
            axios.get(url, {
                headers: {
                    'Authorization': "Bearer " + user.token
                }
            }).then(response => setSatate(response.data))

        }, [])

        // end Get medoth




        // Post medoth

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

        // end Post medoth





        // Delete medoth

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


        // end Delete medoth

        // Search

        // function getSearch(todoValue){
        //     const newSearch = state.filter((value) => value.name.toLowerCase().includes(todoValue.toLowerCase()))
        //     setSatate(newSearch)
        // }


        return (
            <div >
                <h1>Salom hurmatli {user.name}</h1>
                <Add nameRef={nameRef} todos={todos} requestLogin={requestLogin} />
                <Modal modal={modal} setSatate={setSatate} setModal={setModal} />
                {/* <Search getSearch={getSearch}/> */}
                {/* <input type="text" placeholder='Search' onChange={e => getSearch(e.target.value)} /> */}
                {
                    state.map((item )=> (
                        <Box key={item.id} item={item} requestDelet={requestDelet} setModal={setModal} />
                    ))
                }
            </div>

        )

    }

