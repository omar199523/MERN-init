import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getPersons} from "../../store/action/parsonData"
import {H5} from '../Typograph';
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
            <div className ="title-one-person">
                <H5 className="title-petition-no">petition No</H5>
                <H5 className="title-deceased-name">deceased Name</H5>
                <H5 className="title-person-name">person Name</H5>
                <H5 className="title-open-button">Edit</H5>
                <H5 className="title-open-button">open</H5>
                <H5 className="title-deleat-button">deleat</H5>
            </div>
            {persons.map((person) => (<OnePerson person={person}/>))}
        </div>
    )
}

export default ShowPerson;
