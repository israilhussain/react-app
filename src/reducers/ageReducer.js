const reducer = ( argument = { age: 0 }, action ) => {
	switch(action.type) {
		case 'UP_AGE' :
		  const upAgeData = { age: argument.age + action.payload.age};
		  return upAgeData

		case 'DOWN_AGE' :
		  const downAgeData = { age: argument.age - action.payload.age};
		  return downAgeData

		default: 
		  return argument;
	}
}

export default reducer