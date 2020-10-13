import React, { Component } from 'react';
import Form from './Form.js';
import Calendar from './Calendar.js';
import './App.css';

class App extends Component {
  state = {
    date : '',
    days : '',
  }
  getDateDetails = (user_date,user_days) => {
    //console.log("date is:"+user_date+" "+user_days);
    this.setState({
      date : user_date,
      days : user_days,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header-tile">Custom Calendar</h1>
        </header>
        <Form getDateDetails={this.getDateDetails}/>
        <Calendar date={this.state.date} days={this.state.days}/>
      </div>
    );
  }
}

export default App;
// 
//