import React from 'react';
import { useDispatch } from 'react-redux';
// import {FaTwitter} from "react-icons/fa"
import {P1} from '../Typograph';
// import {openEditUser} from '../../store/action/UserAction';
// import { push } from 'connected-react-router';

import './style.css'
const OneUser = ({user,number}) => {
	const dispatch = useDispatch()
    // const handleEditPerson =async ()=>{
    //     await dispatch(openEditUser(user));
    //     await dispatch(push('/mainForm'));
    // }
    const {_id,name,email,registar_date} =user;
    const dateAdded = `${new Date(registar_date).getDay()}/${new Date(registar_date).getMonth()}/${new Date(registar_date).getFullYear()}`
    return (
        <div className ="one-user" key = {_id}>
            <P1 className="user-number">{number}</P1>
            <P1 className="user-name">{name}</P1>
            <P1 className="user-email">{email}</P1>
            <P1 className="date-added">{dateAdded}</P1>
            <P1 className="aciton">
                {/* <FaTwitter onClick={()=>{handleEditPerson()}}/> */}
            </P1>
            
        </div>
    )
}
export default OneUser;
