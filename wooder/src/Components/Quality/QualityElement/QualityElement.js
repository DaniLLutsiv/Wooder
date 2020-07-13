import React from 'react';
import classes from './QualityElement.module.css';
import Line from '../../Line/Line';

const QualityElement = (props) =>{
	return <div className={classes.block}>
			<div className={classes.round}><img src={props.src} /></div>
			<div className={classes.Line}><Line width={'25'} height={'1'} backgroundColor={'c0af91'} margin={'3'}/></div>
			<div className={classes.text}>{props.text}</div>
		</div>
	
}
export default QualityElement;