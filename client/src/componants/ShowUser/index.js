import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getUsers} from '../../store/action/UserAction'
import {H5} from '../Typograph';

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
            <div className ="title-user">
                <H5 className="title-number">Number</H5>
                <H5 className="title-user-name">Name</H5>
                <H5 className="title-user-email">Email</H5>
                <H5 className="title-date-added">Date</H5>
                <H5 className="title-action">Aciton</H5>
            </div>
            {users.map((user,number) => (<OneUser user={user} number ={number +1} key={user._id}/>))}
        </div>
    )
}

export default ShowUser
