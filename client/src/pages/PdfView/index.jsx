import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { useSelector } from 'react-redux';
import PageOne from '../../componants/Forms/formNo-102';
import PageTow from '../../componants/Forms/form-97';
import './style.css'
const PdfView = () => {
    const {persons} =useSelector(state => state)
    return (
        <PDFViewer className="pdf-view" showToolbar="true">
            {(persons.openPersonNum = "102")?(<PageOne person = {persons.presentPerson}/>):null}
            {(persons.openPersonNum = "97")?(<PageTow person = {persons.presentPerson}/>):null}
		</PDFViewer>
    )
}

export default PdfView
