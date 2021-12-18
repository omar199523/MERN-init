import React from 'react';
import { useDispatch } from 'react-redux';
import {P1} from '../Typograph';
// import {deletPerson,presentPerson} from '../../store/action/parsonData';
// import { push } from 'connected-react-router';

import './style.css'
const OneUser = ({user,number}) => {
	// const dispatch = useDispatch()
    const {_id,name,email,registar_date} =user;
    const dateAdded = `${new Date(registar_date).getDay()}/${new Date(registar_date).getMonth()}/${new Date(registar_date).getFullYear()}`
    return (
        <div className ="one-user" key = {_id}>
            <P1 className="user-number">{number}</P1>
            <P1 className="user-name">{name}</P1>
            <P1 className="user-email">{email}</P1>
            <P1 className="date-added">{dateAdded}</P1>
            <P1 className="aciton"></P1>
            
        </div>
    )
}
export default OneUser;
