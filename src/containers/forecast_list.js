import React, {Component} from 'react';
import {connect} from 'react-redux';

class ForecastList extends Component {

  renderWeather(cityData){
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>{cityData.list[0].main.temp}</td>
        <td>{cityData.list[0].main.pressure}</td>
        <td>{cityData.list[0].main.humidity}</td>
      </tr>
    );
  }

  render(){
    return (
        <table className="table table-hover">
            <thead>
              <tr>
                <th>Ciudad</th>
                <th>Temperatura</th>
                <th>Presión</th>
                <th>Humedad</th>
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
