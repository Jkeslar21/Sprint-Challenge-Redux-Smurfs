import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions'
import Smurfs from './Smurfs';

class App extends Component {
    state = {
      name: '',
      age: '',
      height: ''
    }
  
  componentDidMount() {
    this.props.getSmurfs()
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(newSmurf);
    this.setState({ name: '', age: '', height: '' })
  }

  render() {
    if (this.props.fetchingSmurfs) {
      <p>LOADING VILLAGERS...</p>
    }
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.changeHandler} />
          <input type='text' placeholder='Age' name='age' value={this.state.age} onChange={this.changeHandler} />
          <input type='text' placeholder='Height' name='height' value={this.state.height} onChange={this.changeHandler} />
          <button>Add Smurf</button>
        </form>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
})

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
