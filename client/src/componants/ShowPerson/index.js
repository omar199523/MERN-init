// import React ,{useEffect} from 'react'
import {useSelector} from 'react-redux';

import {P1} from '../Typograph';
import OnePerson from '../OnePerson';

import './style.css';
const ShowPerson = () => {
    // const dispatch = useDispatch();
    const {persons} = useSelector(state => state.persons)
    const {users} = useSelector(state => state.users)
    
    return (
        <div className="all-persons">
            <div className ="title-person">
                <P1 className="title-petition-no">petition No</P1>
                <P1 className="title-deceased-name">deceased Name</P1>
                <P1 className="title-person-name">person Name</P1>
                <P1 className="title-Date">Date</P1>
                <P1 className="title-user-add">User Added</P1>
                <P1 className="title-aciton">Action</P1>
            </div>
            {persons.map((person) => {
                const user = users.find(({_id})=>person.userAddId ===_id)
                return (<OnePerson person={person} userAdded = {user}/>)
                })}
        </div>
    )
}

export default ShowPerson;
