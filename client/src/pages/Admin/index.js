import React,{useEffect} from 'react'
import {Admin,Resource} from 'react-admin'
import {useDispatch,useSelector} from 'react-redux';

import {getPersons} from '../../store/action/parsonData';
import {personList,personEdit,personCreate,personIcon} from "../../componants/PersonShow"

const AdminPage = () => {
    const dispatch = useDispatch();
    const {persons} = useSelector(state => state.persons)
    useEffect(()=>{
        dispatch(getPersons())

    },[])
    return (
        <Admin adtaProvider ={persons} >
            <Resource list = {personList} edit ={personEdit} create = {personCreate} icon = {personIcon}/>
        </Admin >
    )
}

export default AdminPage
