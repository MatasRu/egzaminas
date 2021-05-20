import http from "../plugins/Fetch";
import {Link} from "react-router-dom";

function ShowUsers({getUsers}) {


    const deleteUser = (id) => {
        http.get(`/deleteUser/${id}`).then(res => {
            console.log(res)
        })


    }

    return (
        <div className="d-flex mt-50 flex-dir-col flex-a-center flex-j-center user">

            <div className="mb-50 user d-flex flex-j-btw mt-20">
                <div className="width25 bold">Vartotojo vardas</div>
                <div className="width25 bold">Vartotojo amžius</div>
                <div className="width25 bold">Vartotojo el. paštas</div>
                <div className="width25 bold">Vartotojo slaptažodis</div>
                <div className="width25 bold">Opcija</div>
                <div className="width25 bold">Opcija</div>
            </div>

            <div className="mt-50 border user"/>

            {!!getUsers.length > 0 ? getUsers.map((item, index) => <div className="user d-flex flex-a-center flex-j-btw border" key={index}>
               <div className="width25">{item.userName}</div>
                <div className="width25">{item.userAge}</div>
                <div className="width25">{item.userEmail}</div>
                <div className="width25">{item.userPassword}</div>
                <Link key={index} className="editBtn" to={`/EditUser/${item._id}`}>Redaguoti</Link>
                <div onClick={() => deleteUser(item._id)} className="deleteBtn">Ištrinti</div>

            </div>) : null}

        </div>
    );
}

export default ShowUsers;