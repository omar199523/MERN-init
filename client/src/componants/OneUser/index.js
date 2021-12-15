import React from 'react';
import { useDispatch } from 'react-redux';
import {P1} from '../Typograph';
// import {deletPerson,presentPerson} from '../../store/action/parsonData';
// import { push } from 'connected-react-router';

import './style.css'
const OneUser = ({user}) => {
	// const dispatch = useDispatch()
    const {_id,name,email} =user;
    
    return (
        <div className ="one-user" key = {_id}>
            <P1 className="user-name">{name}</P1>
            <P1 className="user-email">{email}</P1>
            <button className="edit-button" onClick={()=>{/*dispatch(deletUser(_id))*/}}>Edit</button>
            <button className="open-button" onClick={()=>{/*dispatch(deletUser(_id))*/}}>Open</button>
            <button className="deleat-button" onClick={()=>{/*dispatch(deletUser(_id))*/}}>Delet</button>
        </div>
    )
}
export default OneUser;
