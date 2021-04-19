import React from 'react'
import {useSelector} from 'react-redux'
import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard'



const ContactList = () => {
const contacts=useSelector(state=>state.contactReducer.contacts)

    return (

      
            <div className="contacts-content">
                <div className="contacts-list">
                 { contacts.map(contact=><ContactCard contact={contact} key={contact._id} />)
                 }
                </div>
            </div>
    )
}

export default ContactList
