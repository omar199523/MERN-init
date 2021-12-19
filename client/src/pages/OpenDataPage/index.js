import React ,{ useEffect,useState}from 'react'
import {H5,H3} from '../../componants/Typograph';
import Input from '../../componants/Input'
import { useSelector ,useDispatch} from 'react-redux';
import { push } from 'connected-react-router';
import { openPersonNum } from '../../store/action/parsonData';
import './style.css'
const OpenDataPage = (person) => {
    const dispatch = useDispatch()
    const {presentPerson} = useSelector(state => state.persons);
    const [formNum,setFormNum] =useState("102")
    const handleOpen = async ()=>{
        console.log(formNum)
        await dispatch(openPersonNum(formNum))
        await dispatch(push('/pdfviewer'));
    }
    const {
        petitionNo,
        deceasedName,
        deceasedAddress,
        deceasedOccupation,
        personName,
        personReligion,
        personIntionality,
        personAge,
        personAddress,
        throwDate,
        throwLanguage,
        throwAdditioan,
        believe,
        personOneName,
        credenceLocation,
        credenceDate,
    } = presentPerson
    return (
        <div className='data-cont container'>  
            <H3>My Data</H3>
            <H5>Petition No <span>{petitionNo}</span></H5>
            <H5>deceased Name <span>{ deceasedName}</span></H5>
            <H5>deceased Address <span>{deceasedAddress}</span></H5>
            <H5>deceased Occupation <span>{deceasedOccupation}</span></H5>
            <H5>person Name <span>{personName}</span></H5>
            <H5>person Religion <span>{personReligion}</span></H5>
            <H5>person Intionality <span>{deceasedOccupation}</span></H5>
            <H5>person Intionality <span>{personIntionality}</span></H5>
            <H5>person Age <span>{personAge}</span></H5>
            <H5>person Address <span>{personAddress}</span></H5>
            <H5>throw Date <span>{throwDate}</span></H5>
            <H5>throw Language <span>{throwLanguage}</span></H5>
            <H5>throw Additioan <span>{throwAdditioan}</span></H5>
            <H5>person One Name <span>{personOneName}</span></H5>
            <H5>believe <span>{believe}</span></H5>
            <H5>credence Location <span>{credenceLocation}</span></H5>
            <H5>credence Date <span>{credenceDate}</span></H5>
            <select value={formNum} onChange={(e)=>{setFormNum(e.target.value)}}>
                <option value ="102">form no.102</option>
                <option value ="97">form no.97</option>
            </select>
            <button on onClick={handleOpen}>open</button>

        </div>
    )
}
export default OpenDataPage
