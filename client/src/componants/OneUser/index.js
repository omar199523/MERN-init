import React from 'react';
import { useDispatch } from 'react-redux';
import {H5} from '../Typograph';
// import {deletPerson,presentPerson} from '../../store/action/parsonData';
// import { push } from 'connected-react-router';

import './style.css'
const OneUser = ({user}) => {
	// const dispatch = useDispatch()
    const {_id,name,email} =user;
    
    return (
        <div className ="one-User" key = {_id}>
            <H5 className="petition-no">{name}</H5>
            <H5 className="deceased-name">{email}</H5>
            <H5 className="User-name"></H5>
            <button className="deleat-button" onClick={()=>{/*dispatch(deletUser(_id))*/}}>deleat</button>
        </div>
    )
}
export default OneUser;
