import React, { Component } from 'react';
import './App.css';
import locations from './data/venues.json'
import MapDisplay from './components/MapDisplay'
import Filter from './components/Filter'

class App extends Component {
  state = {
    lat: 39.629526,
    lon: -79.955897,
    zoom: 13,
    all: locations
  }

  styles = {
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
      position: 'absolute',
      left: 10,
      top: 10,
      background: '#f2f2f2',
      padding: 10
    },
    hide: {
      display: 'none'
    },
    header: {
      marginTop: "0px"
    }
  }

  toggleDrawer = () => {
    // toggles value controlling drawer display
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.toggleDrawer}
          style={this.styles.menuButton}>
            <i className="fa fa-bars"></i>
          </button>
        <h1 className="banner">
          Morgantown Spots!
        </h1>
        </div>
        <MapDisplay
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
          locations={this.state.all}/>
        <Filter
          locations={this.state.all}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}/>
      </div>
    );
  }
}

export default App;
