import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getPersons} from '../../store/action/parsonData'
import {H4} from '../../componants/Typograph';
import OnePerson from '../../componants/OnePerson'

import './style.css';
const SherPersonData = () => {
    const dispatch = useDispatch();
    const {persons} = useSelector(state => state.persons)
    useEffect(()=>{
        document.title = "Show Person Data"
        dispatch(getPersons())

    },[])
    return (
        <div className="all-persons container">
            <div className ="title-one-person">
                <H4 className="title-petition-no">petitionNo</H4>
                <H4 className="title-deceased-name">deceasedName</H4>
                <H4 className="title-person-name">personName</H4>
                <H4 className="title-open-button">open</H4>
                <H4 className="title-deleat-button">deleat</H4>
            </div>
            {persons.map((person) => (<OnePerson person={person}/>))}
        </div>
    )
}

export default SherPersonData
