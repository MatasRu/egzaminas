import http from "../plugins/Fetch"
import {useRef, useState} from 'react';
function CreateUser() {


    const [getError, setError] = useState("")

    const name = useRef()
    const age = useRef()
    const email = useRef()
    const password = useRef()


    const createUser = () => {
        const data = {
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value
        }
        http.post('/createUser', data).then(res => {
            if(res.error){
                setError(res.message)
            }else{
                setError(res.message)
            }

        })
    }

    return (

        <div className="d-flex flex-dir-col mt-50 flex-a-center flex-j-center">

            <input ref={name} type="text" placeholder="Vartotojo vardas"/>
            <input ref={age} type="number" placeholder="Vartotojo amžius"/>
            <input ref={email} type="text" placeholder="Vartotojo el. paštas"/>
            <input ref={password} type="password" placeholder="Vartotojo slaptažodis"/>
            <button onClick={createUser} className="mt-20">Pateikti</button>

            <div className="mt-50 green">{getError}</div>

        </div>


    );
}

export default CreateUser;