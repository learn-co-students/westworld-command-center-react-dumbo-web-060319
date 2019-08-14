import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const hostsUrl = 'http://localhost:4000/hosts'

// As you go through the components given you'll see a lot of functional components.
// But feel free to change them to whatever you want.
// It's up to you whether they should be stateful or not.

class App extends Component {

  state = {
    hostsData: []
  }

  componentDidMount(){
    fetch(hostsUrl)
      .then(res => res.json())
      .then(hostsData => {
        this.setState({ hostsData })
      })
  }


  render(){
    return (
      <Segment id='app'>
        <WestworldMap hostsData={this.state.hostsData} />
        <Headquarters hostsData={this.state.hostsData} />
      </Segment>
    )
  }
}

export default App;
