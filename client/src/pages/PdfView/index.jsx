import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { useSelector } from 'react-redux';
import PageOne from '../../componants/PageOne';
import './style.css'
const PdfView = () => {
    const {persons} =useSelector(state => state)
    return (
        <PDFViewer className="pdf-view" showToolbar="true">
				<PageOne person = {persons.presentPerson}/>

			</PDFViewer>
    )
}

export default PdfView
