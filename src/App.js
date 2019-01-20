import React, { Component } from 'react';
import View from './View';

// to connect store to app
import { connect } from 'react-redux';

class App extends Component {

  componentWillMount(a) {
    console.log('componentWillMount', a)
  }
  componentDidMount() {
    console.log(this.props)
    //console.log(this.props.store.getState())
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps)
  }

  shouldComponenetUpdate(a, b) {
    return false;
    console.log('shouldComponenetUpdate a', a)
  }

  componentWillUpdate(a, b) {
    console.log('componentWillUpdate a, b', a, b)
  }

  componentDidUpdate(preProps, prevState) {
    console.log('componentDidUpdate prevState', prevState)
  }

  toggleTodo = () => {
    console.log(this.props.store.getState())
  }

  render() {
    return (
      <div className="App">
        <View age={ this.props.age } upAge={ this.props.upAge } downAge={ this.props.downAge}/>
      </div>
    );
  }

}

function asyncactionCreator(val) {
  return {
    type: val,
    payload: {
      age: 1,
    },
  }
}

function actionCreator(val) {
  return dispatch => {
    dispatch(asyncactionCreator(val))
    
  }
  
}

function mapStateToProps(state) {
  return {
    age: state.age,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upAge: (val) => {
      
      dispatch(actionCreator(val))
    },

  downAge: (val) => {
      
      dispatch(actionCreator(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


