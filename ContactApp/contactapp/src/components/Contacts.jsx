import React from 'react'
import List from "./List/List"
import Form from "./Form/Form"

import "./Contacts.css"

import {useState} from "react";

const Contacts = () => {
    
    const[contacts,setContacts] = useState([
        {
            id:"1",
            fullName:"Ahmet",
            phoneNumber:"555555"
        },
        {
            id:"2",
            fullName:"Mehmet",
            phoneNumber:"666666"
        },
        {
            id:"3",
            fullName:"Ali",
            phoneNumber:"777777"
        },
    ])
    
  return (
    <div className='container'>
        <List info = {contacts} setInfo = {setContacts} />
        <Form info = {contacts} setInfo = {setContacts}/>
    </div>
  )
}

export default Contacts;