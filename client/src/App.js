import React from "react"
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from "./Components/Home/Home";
import ContactList from "./Components/ContactList/ContactList";
import AddEditContact from "./Components/AddEditContact/AddEditContact";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Home />
     <Switch>
     <Route exact path="/" component={ContactList}/>
     <Route path="/(addContact|editContact)" component={AddEditContact} />
     </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
