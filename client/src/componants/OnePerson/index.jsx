import React from 'react';
import { useDispatch } from 'react-redux';
import {P1} from '../Typograph';
import {deletPerson,presentPerson,openEditPerson} from '../../store/action/parsonData';
import { push } from 'connected-react-router';

import './style.css'
const OnePerson = ({person,userAdded}) => {
	const dispatch = useDispatch()
    const {
        _id,
        petitionNo,
		deceasedName,personName,
        dataAdded
		} =person;
    const openPdfView =async()=>{
        await dispatch(presentPerson(person));
        await dispatch(push('/pdfviewer'));
    }
    const handleEditPerson =async ()=>{
        await dispatch(openEditPerson(person));
        await dispatch(push('/mainForm'));
    }
    const handelDateAdded = `${new Date(dataAdded).getDay()}/${new Date(dataAdded).getMonth()}/${new Date(dataAdded).getFullYear()}`
    return (
        <div className ="one-person" key = {_id}>
            <P1 className="petition-no">{petitionNo}</P1>
            <P1 className="deceased-name">{deceasedName}</P1>
            <P1 className="person-name">{personName}</P1>
            <P1 className="date-added">{handelDateAdded}</P1>
            <P1 className="user-added">{}</P1>
            <button onClick={()=>{handleEditPerson()}} className="one-action">action</button>
            <button className="edit-button" onClick={openPdfView} >Edit</button>
            {/* 
            <button className="open-button" onClick={openPdfView} >Open</button> */}
            {/* <button className="deleat-button" onClick={()=>{dispatch(deletPerson(_id))}}>Deleat</button> */}
        </div>
    )
}
export default OnePerson;
