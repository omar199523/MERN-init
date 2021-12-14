import  {useState} from "react";
import ShowPerson from "../../componants/ShowPerson"
import ShowUser from "../../componants/ShowUser"
import {H2,} from "../../componants/Typograph"
import './style.css'

const AdminPage =()=>{
    const [user, setUser] = useState(false)
    const [person, setPerson] = useState(true)
    return (
        <div className="container admin-page">
            <H2>Admin Page</H2>
            <div className="left-bar">
                <button className="left-bar-button" onClick={()=>{setUser(true); setPerson(false)}}>User</button>
                <button className="left-bar-button" onClick={()=>{setUser(false); setPerson(true)}}>Person</button>
            </div>
            <div className="show-data-cont">
                {(user)?(<ShowUser/>):null}
                {(person)?(<ShowPerson/>):null}
                
            </div>
        </div>
    )
}
export default AdminPage;


 