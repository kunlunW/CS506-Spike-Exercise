import React, {Component} from 'react';
import { Map,
         InfoWindow,
         Marker,
         GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div style={{width:'500px', height:'500px'}}>
        <Map
          google={this.props.google}
          initialCenter={{ lat: 43.073051, lng: -89.401230 }}
          zoom={20}
          onClick={this.onMapClicked}
          responsive
        >
          <Marker onClick={this.onMarkerClick} name={'BadgerByte'} />
          <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            <h1>{this.state.selectedPlace.name}</h1>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({})(MapContainer);