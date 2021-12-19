import  {useState,useEffect} from "react";
import {useDispatch} from 'react-redux';
import ShowPerson from "../../componants/ShowPerson"
import ShowUser from "../../componants/ShowUser"
import {getPersons} from "../../store/action/parsonData"
import {getUsers} from "../../store/action/UserAction"
import {H2,} from "../../componants/Typograph"
import './style.css'

const AdminPage =()=>{
    const [user, setUser] = useState(false)
    const [person, setPerson] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        document.title ="Admin Page"
        dispatch(getUsers())
    },[])
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


 