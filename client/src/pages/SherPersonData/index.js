import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getPersons} from '../../store/action/parsonData'
import {H3} from '../../componants/Typograph';
import OnePerson from '../../componants/OnePerson'

import './style.css'
const SherPersonData = () => {
    const dispatch = useDispatch();
    const {persons} = useSelector(state => state.persons)
    useEffect(()=>{
        dispatch(getPersons())
        console.log(persons)
    },[dispatch])
    return (
        <div className="all-persons container">
            <div className ="one-person">
                <H3 className="petition-no">petitionNo</H3>
                <H3 className="deceased-name">deceasedName</H3>
                <H3 className="person-name">personName</H3>
                <H3 className="open-button">open</H3>
                <H3 className="deleat-button">deleat</H3>
            </div>
            {persons.map((person) => (<OnePerson person={person}/>))}
        </div>
    )
}

export default SherPersonData
