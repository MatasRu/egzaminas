import {Link} from "react-router-dom";

function ToolBar() {
    return (
        <div className="toolbar d-flex flex-j-center flex-a-center">
            <Link className="m10 link" to="/">Pradinis</Link>
            <Link className="m10 link" to="/CreateUser">Sukurti naują vartotoją</Link>

        </div>
    );
}

export default ToolBar;