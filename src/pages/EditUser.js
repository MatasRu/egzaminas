import {useRef, useState} from "react";
import {useParams} from "react-router-dom";
import http from "../plugins/Fetch";


function EditUser({getUsers}) {


    const params = useParams()
    const [getError, setError] = useState("")
    const id = params.id
    const name = useRef()
    const age = useRef()
    const email = useRef()
    const password = useRef()
    const [user, setUser] = useState(getUsers.find(o => o._id === params.id))

    const updateUser = () => {
        const data = {
            id: id,
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value
        }
        http.post('/editUser', data).then(res => {
            if (res.error) {
                setError(res.message)
            } else {
                setError(res.message)
            }
        })
    }


    return (

        <div className="d-flex flex-dir-col mt-50 flex-a-center flex-j-center">

            <div>Vartotojo vardas: <input ref={name} type="text" placeholder={user.userName}/></div>
            <div>Vartotojo amžius: <input ref={age} type="number" placeholder={user.userAge}/></div>
            <div>Vartotojo el. paštas: <input ref={email} type="text" placeholder={user.userEmail}/></div>
            <div>Vartotojo slaptažodis: <input ref={password} type="password" placeholder={user.userPassword}/></div>
            <button onClick={updateUser} className="mt-20">Pateikti</button>

            <div className="mt-50 green">{getError}</div>

        </div>


    );
}

export default EditUser;