import React ,{useEffect ,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getPersons} from "../../store/action/parsonData"
import {P1} from '../Typograph';
import OnePerson from '../OnePerson';

import './style.css';
const ShowPerson = () => {
    const dispatch = useDispatch();
    const {persons} = useSelector(state => state.persons)
    const {isAuthenticed,user} = useSelector(state => state.auth)
    useEffect( ()=> {
        if(isAuthenticed){
            dispatch(getPersons(user.name,user._id))
        }
    },[])
    
    return (
        <div className={(user.name !== "Admin")?"marg-top container":"all-persons"}>
            <div className ="title-person">
                <P1 className="title-petition-no">petition No</P1>
                <P1 className="title-deceased-name">deceased Name</P1>
                <P1 className="title-person-name">person Name</P1>
                <P1 className="title-Date">Date</P1>
                <P1 className="title-user-add">User Added</P1>
                <P1 className="title-aciton">Action</P1>
            </div>
            {persons.map((person) => {
                return (<OnePerson person={person} key={person._id}/>)
                })}
        </div>
    )
}

export default ShowPerson;
