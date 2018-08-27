import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: '',
    };
  }

  onInputChange(event){
    this.setState({location: event.target.value});
  }

  render(){
    return (
      <div>
        <form action="search">
          <div className="form-group">
            <input className="form-control"
              value={this.state.location}
              onChange={(event)=>this.onInputChange(event)}
              placeholder="Localización"/>
          </div>
          <button onClick={()=>{this.props.searchForecast()}}
            type="submit"
            className="btn btn-primary">Buscar</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    location: ''
  };
}

function mapActionToProps(dispatch){
  return {
    searchForecast:''
  };
}

export default connect (mapStateToProps,mapActionToProps)(SearchBar);
