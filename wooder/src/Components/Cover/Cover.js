import React from 'react';
import Wooder from './../../img/images/WOODER-Free-PSD-Template_01.png';
import classes from './Cover.module.css';
import Line from '../Line/Line';

const Cover = () =>{

	return <section className={classes.Cover}>
		<div className={classes.body}>		
			<img className={classes.img} src={Wooder}/>
			<div className={classes.text}>
				<Line width={'51'} height={'4'} backgroundColor={'c0af91'} margin={'25'}/>
				<div className={classes.number}>01</div>
				<div className={classes.circleOne}></div>
				<div className={classes.circle}></div>
				<div className={classes.circle}></div>
				<div className={classes.circle}></div>
			</div>
			<h1>W O O D E R</h1>
		</div>

	</section>
}
export default Cover;