import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWether} from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({location: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();

    this.props.fetchWether(this.state.location);
    this.setState({location: ''});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form form-inline">
          <div className="form-group">
            <input
              className="form-control"
              value={this.state.location}
              onChange={(event)=>this.onInputChange(event)}
              placeholder="Localización"/>
          </div>
          <button
            type="submit"
            className="btn btn-primary">Buscar</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWether}, dispatch);
}

export default connect (null,mapDispatchToProps)(SearchBar);
