import React, { Component } from 'react'
import BirthShow from './MyComponents/BirthShow/BirthShow'
import axios from 'axios'
import Header from './MyComponents/Header'
import BirthAdd  from './MyComponents/BirthAdd/BirthAdd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

//----------Axios Instance----------------//
const ai = axios.create({
   baseURL:'http://127.0.0.1:8000/api'

})
   
    // baseURL:'https://djangobirthreminderapi.herokuapp.com/api'
    
class App extends Component {
  handleDelete = id => {
    console.log(id)
    ai.delete(`/delete/${id}`)
    .then((res)=>{
      this.showBirth()
    })
  }

  render() {
    return (
      <Router>
     <Header title = "Birthday reminder"/>  
      <Switch>
          <Route exact path="/" render={()=>{
             return (
              <>
                <BirthAdd/>
              </> 
              )}}>
          </Route>
          <Route exact path="/birthdays" render={()=>{
             return (
              <>
                <BirthShow/>
              </> 
              )}}>
          </Route>
      </Switch>
      </Router>

              
    )
  }
}

export default App;




















