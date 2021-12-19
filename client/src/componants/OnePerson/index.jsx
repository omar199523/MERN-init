import React from 'react';
import { useDispatch } from 'react-redux';
import {P1} from '../Typograph';
import { BiEdit ,BiEnvelopeOpen} from "react-icons/bi";
import { AiOutlineDelete} from "react-icons/ai";
import { FaBeer } from 'react-icons/fa';
import {deletPerson,presentPerson,openEditPerson} from '../../store/action/parsonData';
import { push } from 'connected-react-router';

import './style.css'
const OnePerson = ({person}) => {
	const dispatch = useDispatch()
    const {
        _id,
        petitionNo,
		deceasedName,personName,
        dataAdded,
        userAddedName
		} =person;
    const openPdfView =async()=>{
        await dispatch(presentPerson(person));
        await dispatch(push('/openDataPage'));
    }
    const handleEditPerson =async ()=>{
        await dispatch(openEditPerson(person));
        await dispatch(push('/mainForm'));
    }
    const handelDateAdded = `${new Date(dataAdded).getDay()}/${new Date(dataAdded).getMonth()}/${new Date(dataAdded).getFullYear()}`
    return (
        <div className ="one-person">
            <P1 className="petition-no">{petitionNo}</P1>
            <P1 className="deceased-name">{deceasedName}</P1>
            <P1 className="person-name">{personName}</P1>
            <P1 className="date-added">{handelDateAdded}</P1>
            <P1 className="user-added">{userAddedName}</P1>
            <P1  className="one-action">
                <BiEdit onClick={()=>{handleEditPerson()}}/>
                <AiOutlineDelete onClick={()=>{openPdfView()}}/>
                <BiEnvelopeOpen onClick={()=>{dispatch(deletPerson(_id))}}/>
            </P1>
            {/* 
            <button className="open-button" onClick={openPdfView} >Open</button> */}
            {/* <button className="deleat-button" onClick={()=>{dispatch(deletPerson(_id))}}>Deleat</button> */}
        </div>
    )
}
export default OnePerson;
