import React, { Component } from 'react';
import './birthshow.css';
import axios from 'axios'
import List from './list'

const ai = axios.create({
  baseURL:'http://0.0.0.0:8000/api'
})

// baseURL:'https://djangobirthreminderapi.herokuapp.com/api'

class Plan extends Component {
//  const arr = props.p
state = {
    items: [],
    text: ""
  }
  showBirth = ()=>{
    ai.get('/list/')
    .then((res)=>{
      console.log("Data inside Plan:", res.data)
        this.setState({items:res.data})
        // console.log("data inside Plan name", res.data.name)
    })
  }
  componentDidMount(){
    this.showBirth();
  }
      handleDelete = id =>{
        console.log(id)
        ai.delete(`/delete/${id}`)
        .then((res)=>{this.showBirth()
        })
      } 

  todayColor =  { color : "#343a40"}
  upcomingColor =  { color : "#757679"}

render(){
    return(
  
        <main id='site-main'>
        <div className="board">
              <div className='today'>
              <h1 className="title" style={this.todayColor}>Today's Birthday</h1>
             <List info={Today(this.state.items)} sendData={this.handleDelete}></List>
              </div>
              <h2 className='upcoming' style={this.upcomingColor}>Upcoming</h2>
              <div className='upcoming'>
              <List  info={Upcoming(this.state.items)} upcoming={true} sendData={this.handleDelete}></List>
              </div>
        </div>
        </main>
        );
}

}

export default Plan


function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.date).getDate();
        let month = new Date(data.date).getMonth();

        return currentDay === day && currentMonth === month;
    })
    return filter;
}


// upcoming birthdays
function Upcoming(person){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter =person.filter(data => {
        let month = new Date(data.date).getMonth();
        let day = new Date(data.date).getDate();

        if (currentDay === day) return;
        return month >= currentMonth || month <= currentMonth ;
    })

    return filter;

}

