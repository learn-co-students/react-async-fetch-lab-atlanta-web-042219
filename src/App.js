// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    loading: true,
    people: ''
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => this.setState({ people: data.people }))
  }

  render() {
    return (
      <div>
        {this.state.people ? this.state.people.map(person => <div key={person.name}>{person.name}</div>) : <div>loading</div>}
      </div>
    )
  }
}
