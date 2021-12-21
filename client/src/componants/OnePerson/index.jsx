import React from 'react';
import { useDispatch } from 'react-redux';
import {P1} from '../Typograph';
import {IconContext} from "react-icons"
import { AiOutlineDelete ,AiFillFolderOpen} from "react-icons/ai";
import {FaGithub} from "react-icons/fa"
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
        userAddName
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
                <P1 className="user-added">{userAddName}</P1>
                <P1  className="one-action">
                    <FaGithub onClick={()=>{handleEditPerson()}} className='edit-icon'/>
                    < AiFillFolderOpen onClick={()=>{openPdfView()}} className='open-icon'/>
                    <AiOutlineDelete onClick={()=>{dispatch(deletPerson(_id))}} className='delete-icon'/>
                </P1>
        </div>
    )
}
export default OnePerson;
