import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/google_map';

class ForecastList extends Component {

  renderWeather(cityData){
    let temps = cityData.list.map(weather => weather.main.temp);
    let humidities = cityData.list.map(weather => weather.main.humidity);
    let pressures = cityData.list.map(weather => weather.main.pressure);
    const {lat, lon} = cityData.city.coord;
    return (
      <tr key={cityData.city.id}>
        <td>
          <Map lat={lat} lon={lon}/>
        </td>
        <td>
          <Chart data={temps} color="red" units="C"/>
        </td>
        <td>
          <Chart data={pressures} color="blue" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="green" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return (
        <table className="table table-hover">
            <thead>
              <tr>
                <th>Ciudad</th>
                <th>Temperatura (C)</th>
                <th>Presión (hPa)</th>
                <th>Humedad (%)</th>
              </tr>
            </thead>
            <tbody>
                {this.props.forecast.map(this.renderWeather)}
            </tbody>
        </table>
    );
  }
}

function mapStateToProps({forecast}){
  return ({forecast});
}

export default connect(mapStateToProps)(ForecastList);
