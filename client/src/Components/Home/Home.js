import React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import './Home.css'
import {getContacts, toggleFalse} from '../../redux/Actions/ContactActions'



const Home = () => {
const dispatch=useDispatch()

    return (
        <div>
            {/* contact list button */}
           
                <Link to='/'>
                <button className="app-btn" onClick={()=>dispatch(getContacts())}>Contact List</button>
                </Link>
           

            {/* add contact button */}
           
                <Link to="/addContact">
                <button className="app-btn" onClick={()=>dispatch(toggleFalse())} >Add Contact</button>
                </Link>
               
           
        </div >
    )
}

export default Home
