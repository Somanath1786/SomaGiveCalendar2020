import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    response : '',
    calEvents : ''
  }

  componentDidMount() {
    this.fetchTokenAndGetEvents()
    .catch(err => console.log(err));
  }

  fetchTokenAndGetEvents = async () => {
    const response = await fetch('/api/getToken')
    const body = await response.json();

    const token = Object.values(body)[0];
    const bearerToken = "Bearer "+token;

    var myHeaders = new Headers();
    myHeaders.append("Accept-Encoding", "utf-8");
    myHeaders.append("Authorization", bearerToken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://public-api.benevity-staging.org/search/givingopportunities?page_size=100&q=", requestOptions)
    .then(response => response.json())
    .then(results => {
      this.setState({response : results})
      this.processEventsForCalendar(results)
    })
  }

  processEventsForCalendar(response)
  {
    const givingOppurtunities = response.giving_opportunities;
    // Iterate over each of the giving oppurtunities and populate a local variable with id, title, description, start date and end date

    let calendarEventsArray = [];
    for(let i = 0; i < givingOppurtunities.length; i++)
    {
      var calendarEvent = {};
      var start_time = this.getStartTime(givingOppurtunities[i].tags)
      if (start_time != undefined)
      {
        let end_time = start_time;
        end_time.setDate(start_time.getDate() + 1);

        calendarEvent["start_time"] = start_time;
        calendarEvent["end_time"] = end_time;
        calendarEvent["id"] = givingOppurtunities[i].id;
        calendarEvent["title"] = givingOppurtunities[i].title;
        calendarEvent["description"] = givingOppurtunities[i].description;

        calendarEventsArray.push(calendarEvent);
      }
    }

    this.setState({calEvents: calendarEventsArray})
  }

  getStartTime(tags)
  {
    if(tags != null)
    {
      for(let i = 0; i < tags.length; i++)
      {
        if(tags[i].includes('October'))
        {
          const date = tags[i].split(' ')[1];
          return new Date(2020, 9, date);
        }
      }
    }
  }


  render(){
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
