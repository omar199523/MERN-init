import React ,{ useState}from 'react'
import {H5,H3} from '../../componants/Typograph';
import Select from '../../componants/Select';
import { useSelector ,useDispatch} from 'react-redux';
import { push } from 'connected-react-router';
import { openPersonNum } from '../../store/action/parsonData';
import './style.css'
const OpenDataPage = (person) => {
    const dispatch = useDispatch()
    const {presentPerson} = useSelector(state => state.persons);
    const [formNum,setFormNum] =useState("")
    const handleOpen = async ()=>{
        await dispatch(openPersonNum(formNum))
        await dispatch(push('/pdfviewer'));
    }
    const handleOnCheange =(e)=>{
        console.log(e.target.value)
        setFormNum(e.target.value)
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
            <H5>Petition No: <span>{petitionNo}</span></H5>
            <H5>deceased Name: <span>{ deceasedName}</span></H5>
            <H5>deceased Address: <span>{deceasedAddress}</span></H5>
            <H5>deceased Occupation: <span>{deceasedOccupation}</span></H5>
            <H5>person Name: <span>{personName}</span></H5>
            <H5>person Religion: <span>{personReligion}</span></H5>
            <H5>person Intionality: <span>{deceasedOccupation}</span></H5>
            <H5>person Intionality: <span>{personIntionality}</span></H5>
            <H5>person Age: <span>{personAge}</span></H5>
            <H5>person Address: <span>{personAddress}</span></H5>
            <H5>throw Date: <span>{throwDate}</span></H5>
            <H5>throw Language: <span>{throwLanguage}</span></H5>
            <H5>throw Additioan: <span>{throwAdditioan}</span></H5>
            <H5>person One Name: <span>{personOneName}</span></H5>
            <H5>believe: <span>{(believe)? "yse":"no"}</span></H5>
            <H5>credence Location: <span>{credenceLocation}</span></H5>
            <H5>credence Date: <span>{credenceDate}</span></H5>
            <Select
                label="Choise Form"
                Name="ChoiseForm"
                options={["choise opction","Form No.102","Form No.97"]}
                handleInputChange={handleOnCheange}
            />
            <button on onClick={handleOpen}>open</button>

        </div>
    )
}
export default OpenDataPage
