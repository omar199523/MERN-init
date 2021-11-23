import React from 'react'
import {H3} from '../Typograph';
import './style.css'
const OnePerson = ({person}) => {
    const {
        _id,
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
		credenceDate,} =person;
    return (
        <div className ="one-person" key = {_id}>
            <H3 className="petition-no">{petitionNo}</H3>
            <H3 className="deceased-name">{deceasedName}</H3>
            <H3 className="person-name">{personName}</H3>
            <button className="open-button">open</button>
            <button className="deleat-button">deleat</button>
        </div>
    )
}
export default OnePerson;
