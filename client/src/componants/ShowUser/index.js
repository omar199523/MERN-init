import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getUsers} from '../../store/action/UserAction'
import {H5} from '../Typograph';
import OnePerson from '../OnePerson'
import OneUser from '../OneUser'

import './style.css';
const ShowUser = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users)
    useEffect( ()=>{
         dispatch(getUsers())

    },[dispatch])
    return (
        <div className="all-users">
            <div className ="title-one-person">
                <H5 className="title-petition-no">User ID</H5>
                <H5 className="title-deceased-name">User Name</H5>
                <H5 className="title-open-button">Edit</H5>
                <H5 className="title-open-button">open</H5>
                <H5 className="title-deleat-button">deleat</H5>
            </div>
            {users.map((user) => (<OneUser user={user}/>))}
        </div>
    )
}

export default ShowUser
