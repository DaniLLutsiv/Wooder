import React from 'react';

const Line = (props) =>{

	const Styles = { 
		backgroundColor: '#'+ props.backgroundColor , 
		height: props.height + 'px',
		width: props.width + 'px',
		margin: props.margin + 'px'
	}
	return <div style={Styles}></div>
}

export default Line;