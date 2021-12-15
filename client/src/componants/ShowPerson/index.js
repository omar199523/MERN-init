import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getPersons} from "../../store/action/parsonData"
import {P1} from '../Typograph';
import OnePerson from '../OnePerson';

import './style.css';
const ShowPerson = () => {
    const dispatch = useDispatch();
    const {persons} = useSelector(state => state.persons)
    useEffect(()=>{
        dispatch(getPersons())

    },[])
    return (
        <div className="all-persons">
            <div className ="title-person">
                <P1 className="title-petition-no">petition No</P1>
                <P1 className="title-deceased-name">deceased Name</P1>
                <P1 className="title-person-name">person Name</P1>
                <P1 className="title-edit-button">Edit</P1>
                <P1 className="title-open-button">Open</P1>
                <P1 className="title-deleat-button">Deleat</P1>
            </div>
            {persons.map((person) => (<OnePerson person={person}/>))}
        </div>
    )
}

export default ShowPerson;
