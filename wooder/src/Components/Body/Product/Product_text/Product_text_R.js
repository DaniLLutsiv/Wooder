import React from 'react';
import classes from './Product_text.module.css';
import Line from '../../../Line/Line';

const Product_text_R = (props) =>{
	let Strlenght = getComputedStyle(document.body).width;
	let Width = Number(Strlenght.substring(0, Strlenght.length - 2));
	return <div className={classes.Product_text_R}>
			<div className={classes.text}>
				<div className={classes.Name}>{props.Name}</div>
				<div>{props.text}</div>
				<div className={classes.Learn}>
					<div className={classes.Learn_text}>LEARN MORE &#8594;</div>
					<Line backgroundColor={'bea67c'} height={2} width={44} margin={0}/>
				</div>
			</div>
			<div className={classes.Line_R}>
				<Line backgroundColor={'000000'} height={1} width={(151*Width/1920)} margin={0}/>
				<Line backgroundColor={'bea67c'} height={4} width={(44*Width/1920)} margin={65}/>
				<div className={classes.Number_R}>{props.number}</div>
			</div>
		</div>
}
export default Product_text_R;