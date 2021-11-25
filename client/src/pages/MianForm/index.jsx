import React ,{useState}from 'react'
import Input from '../../componants/Input'
import { PDFDownloadLink} from '@react-pdf/renderer';
import PageOne from '../../componants/PageOne';
import {H2} from '../../componants/Typograph';
import {useDispatch} from 'react-redux';
import {addPerson} from '../../store/action/parsonData'


import "./style.css"
export const MianForm = ({}) => {
    const dispatch = useDispatch()
    const [data,setData] =useState({
		petitionNo:String,
		deceasedName:String,
		deceasedAddress:String,
		deceasedOccupation:String,
		personName:String,
		personReligion:String,
		personIntionality:String,
		personAge:Number,
		personAddress:String,
		throwDate:Date,
		throwLanguage:String,
		throwAdditioan:String,
		believe:false,
		personOneName:String,
		credenceLocation:String,
		credenceDate:Date,
	});
    const dataReset =() =>{
        setData({
            petitionNo:"",
            deceasedName:"",
            deceasedAddress:"",
            deceasedOccupation:"",
            personName:"",
            personReligion:"",
            personIntionality:"",
            personAge:0,
            personAddress:"",
            throwDate:"",
            throwLanguage:"",
            throwAdditioan:"",
            believe:false,
            personOneName:"",
            credenceLocation:"",
            credenceDate:"",
        })
    }
    const handleInputChange = (event) => {
        console.log(event)
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setData({ ...data, [name]: value });
      };
    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        await dispatch(addPerson(data)) 
        await dataReset();
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
    } = data
    return (
        <form onSubmit={handleOnSubmit}  className="main-form container">
    
            <H2>Form No. 102 </H2>
            <fieldset>
                <legend>Deceased Info</legend>
                <Input type ="text"
                placeholder ="petition No"
                label ="Petition No."
                // minLength="8"
                value={petitionNo}
                handleInputChange={handleInputChange}
                name="petitionNo"
                />
                <Input type ="text"
                placeholder ="Deceased Name"
                label ="Deceased Name"
                value={deceasedName}
                handleInputChange={handleInputChange}
                name="deceasedName"
                />
                <Input type ="text"
                placeholder ="Deceased Address"
                label ="Deceased Address"
                value={deceasedAddress}
                handleInputChange={handleInputChange}
                name="deceasedAddress"
                />
                <Input type ="text"
                placeholder ="Deceased Occupation"
                label ="Deceased Occupation"
                value={deceasedOccupation}
                handleInputChange={handleInputChange}
                name="deceasedOccupation"
                />
            </fieldset>
            <fieldset>
                <legend>Person Info</legend>
                <Input type ="text"
                placeholder ="Person Name"
                label ="Person Name"
                value={personName}
                handleInputChange={handleInputChange}
                name="personName"
                />
                <Input type ="text"
                placeholder ="person Religion"
                label ="Person Religion"
                value={personReligion}
                handleInputChange={handleInputChange}
                name="personReligion"
                />
                <Input type ="text"
                placeholder ="person Intionality"
                label ="person Intionality"
                value={personIntionality}
                handleInputChange={handleInputChange}
                name="personIntionality"
                />
                <Input type ="number"
                placeholder ="person Age"
                label ="Person Age"
                value={personAge}
                handleInputChange={handleInputChange}
                name="personAge"
                />
                <Input type ="text"
                placeholder ="person Address"
                label ="Person Address"
                value={personAddress}
                handleInputChange={handleInputChange}
                name="personAddress"
                />
                <Input type ="checkBox"
                label ="Believe in the God"
                value={believe}
                handleInputChange={handleInputChange}
                name="believe"
                />
            </fieldset>
            <fieldset>
                <legend>Throw Info</legend>
                <Input type ="text"
                placeholder ="person One Name"
                label ="Person One Name"
                value={personOneName}
                handleInputChange={handleInputChange}
                name="personOneName"
                />
                <Input type ="date"
                placeholder ="Date"
                label ="Date"
                value={throwDate}
                handleInputChange={handleInputChange}
                name="throwDate"
                />
                <Input type ="text"
                placeholder ="throw Language"
                label ="Throw Language"
                value={throwLanguage}
                handleInputChange={handleInputChange}
                name="throwLanguage"
                />
                <Input type ="text"
                placeholder ="throw Additioan"
                label ="Throw Additioan"
                value={throwAdditioan}
                handleInputChange={handleInputChange}
                name="throwAdditioan"
                />
            </fieldset>
            <fieldset>
                <legend>Credence Info</legend>
                <Input type ="text"
                placeholder ="Credence Loation"
                label ="credence Loation"
                value={credenceLocation}
                handleInputChange={handleInputChange}
                name="credenceLocation"
                />
                <Input type ="date"
                placeholder ="credenceDate Date"
                label ="Credence Date"
                value={credenceDate}
                handleInputChange={handleInputChange}
                name="credenceDate"
                />
            </fieldset>
            <fieldset className= "but-cont">
            <button type= "submit">Add Perosn</button>

            
            </fieldset>
            
        </form>
    )
}
export default MianForm;
/* <PDFDownloadLink document={<PageOne data={data}/>} className="download-button" fileName = "Form_106.pdf">
                {({ loading }) => {
                    return loading ? 'Loading document...' : 'Download now !';
                }}</PDFDownloadLink> */