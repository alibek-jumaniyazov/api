import { useRef } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {

    const navigate = useNavigate()

    const nameRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const requestLogin = async () => {
        const url = 'http://faveo.uz:8080/api/v1/account'
        const body = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const response = await axios.post(url, body)
            localStorage.setItem('user', JSON.stringify(response.data))
            const user = JSON.parse(localStorage.getItem('user'))

            let poxxuy = true

            if (user == "Wrong password") {
                alert('Oldin bu User dan Akkaunt ochilgan')
                poxxuy = false
            }
            if (poxxuy == true) {
                navigate("/todos")
            }
        }
        catch (err) {
            alert('4 harfdan kop bolishi kerak')
        }
    }

    return (
        <div className="Login">
            <div className="box">
                <Input type="text" placeholder="Name" ref={nameRef} />
                <Input type="text" placeholder="Username" ref={usernameRef} />
                <Input type="text" placeholder="password" ref={passwordRef} />
                <button onClick={() => requestLogin()}>login</button>
            </div>
        </div>
    )
}

