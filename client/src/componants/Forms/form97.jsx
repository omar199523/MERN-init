import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const Quixote3 = ({person}) =>{
    const {petitionNo,
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
    }=person;
    const months =["January","February","March","April","May","June","July","August","September","Outober","November","December"]
    const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const newThrowDate =new Date(throwDate);
    const newCredenceDate=new Date(credenceDate);
    const thisYear = new Date().getFullYear();
    const nth =(n)=>{
      switch(n){
        case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
      }
    }
    return(
      <Document style={styles.body}>
        <Page style={styles.body}>
          <Text style={styles.header}> Form No. 97 </Text>
          <Text style={styles.header}> IN THE HIGH COURT OF JUDICATURE AT BOMBAY </Text>
          <Text style={styles.header}> TESTAMENTARY AND INTESTATE JURISDICTION </Text>
          <Text style={styles.header}> PETITION No .......... of ..........</Text>
          
          <Text style={styles.title}>Petition for probate of last will and testament of .......... </Text>
          <Text style={styles.title}>resident of .................................................. </Text>
          <Text style={styles.title}>having occupation of .................... Deceased. </Text>
          <Text style={styles.title}>.................... Petitioner.</Text>
          <Text style={styles.title}> THE PETITION OF THE PETITIONER ABOVBNAMED </Text>
          <Text style={styles.title}> TO THE HON'BLE THECHIEF JUSTICE AND JUDGES OF THE HIGH COURT </Text>


          <Text style={styles.text}>
          HEREWITH:-
          1. That the above named .................  died at .......... on or about the .....th day ....... of ........ 2018. 
            Hereto annexed and marked Exhibit “A” is the copy of the death certificate.
          </Text>
          <Text style={styles.text}>
          2.	That the said deceased at the time of his death had a fixed place of abode at ................................
          ................... and has left property within ................ and in the State of ...........  [and elsewhere in India.]
          </Text>
          <Text style={styles.text}>
          3.	That the said deceased left writing, which is his last will and testament. The said writing, hereinafter referred 
          to as the will, is marked Exhibit “B” and is handed in separately for being filed and kept in a safe place in the office
          of the Prothonotary and Senior Master. A copy of the said Will is hereto annexed and also marked as Exhibit “B”
          </Text>
          <Text style={styles.text}>
          4.	That the said will was duly executed at ........... on the ....th day of ....... of .........
          </Text>
          <Text style={styles.text}>
          5.	That the petitioner is the executor named in the said will.
          </Text>
          <Text style={styles.text}>
          6.	6.	That the Petitioner has truly set forth in Schedule No. I hereto annexed and marked Exhibit “C”, all the property
          and credits which the deceased died possessed of or entitled to at the time of his death, which have or are likely to 
          come to Petitioner’s hands. 
          7.	That the Petitioner has truly set forth in Schedule No. II, hereto annexed and marked Exhibit “D”, all the items that by law 
          he is allowed to deduct for the purpose of ascertaining the net estate of the deceased.
          8.	That the petitioner has truly set forth in Schedule No. III, hereto annexed and marked Exhibit E, the property held by the 
          deceased as trustee for another and not beneficially or with general power to confer a beneficial Interest
          </Text>
          <Text style={styles.text}>
          9.	That the assets of the deceased after deducting the items mentioned in Schedule No. II but including all rents, 
          interest and dividends which have accrued since the date of the death of the deceased and increased value of the assets since 
          the said date are of the value of Rs .......................  (Figure in Words)
          </Text>
          <Text style={styles.text}>
          10.	That the said deceased left him surviving as his only heirs and next-of-kin according to Hindu Succession Law 
          the following persons, who are residing at the addresses set out against their respective names :-
          [[[[[[[[[[[[[[Sr. No	Full Name	Address	Occupation	Relationship	Age]]]]]]]]]]]]]]]]]]]
          </Text>
          <Text style={styles.text}>
          11.	That save and except the heirs mentioned herein above, there are no other heirs left by the deceased
          12.	That no application has been made to any District Court or District delegate or to any other High Court for probate of 
          any will of the said deceased or for letters of administration with or without the will annexed to his property and credits
          (C).
          13.	The petitioner prays that probate may be granted to her having effect throughout the State of Maharashtra and the Union
          of India.
          14.	I, ........................., the petitioner above named do wear in the name of God that what is stared in 
          paragraphs is true to my own knowledge and that what is stated in the remaining paragraphs is stated on information
          and belief and I believe the same to be true.

          </Text>
          <Text style={styles.text}>
          [Sworn / Solemnly affirmed] at .....................	  ]
          </Text>
          <Text style={styles.text}>
                this .....…. Day of ……………... 202  	] 
          </Text>
      
          <Text style={styles.title}>................................................. </Text>
          <Text style={styles.title}>Before Me </Text>

          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
        </Page>
      </Document>
  )};
  

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      leading: 2.0,
      marginLeft: '0.8rem'
    },
    title: {
      fontSize: 13,
      textAlign: 'right',
      font: 'Georgia',
      leading: 2.0,
      marginBottom: 13,
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      //fontFamily: 'Oswald'
    },
    text: {
      fontSize: 13,
      font: 'Georgia',
      leading: 2.0,
      marginBottom: 13,
      textAlign: 'justify',
      lineHeight: 2,
      marginLeft: '1.5rem',
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 13,
      marginBottom: 13,
      textAlign: 'center',
      color: 'black',
      font: 'Georgia',
      //leading: 2.0
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });

  
export default Quixote3;
  