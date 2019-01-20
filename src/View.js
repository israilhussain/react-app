import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class View extends React.Component {
	componentDidMount() {
		console.log('View', this.props)
	}
	render() {
		return (
			<div>
			  <button onClick={ () => this.props.upAge('UP_AGE') }>AgeUp</button>
			  <button onClick={ () => this.props.downAge('DOWN_AGE')}>AgeDown</button>
			  <span>Age: { this.props.age }</span>
			</div>
		);
	}
}

View.propTypes = {
	age: propTypes.number.required, 
}

export default View;