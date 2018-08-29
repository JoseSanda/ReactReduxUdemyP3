import React,{Component} from 'react';

class GoogleMap extends Component {

  componentDidMount(){
    console.log(this.props.lat);
    console.log(this.props.lon);
    new google.maps.Map(this.refs.map, {
      zoom: 13,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    return <div ref="map" />
  };
}

export default GoogleMap;
