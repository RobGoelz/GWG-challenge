import React, {Component} from 'react';

class Container extends Component {
  render () {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    if (!this.props.loaded) {
      return (<div>Loading...</div>);
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyAVNvPvtksWMshnL2fa-5sszYkaircUZWI'
})(Container)
