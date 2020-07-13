import React from 'react';
import classes from './Footer.module.css';
import Line from '../Line/Line';

const Footer = () =>{
	return <footer>
		<img src={'/images/Footer_03.png'}/>
		<div className={classes.block}>
			<div className={classes.left}>&copy; 2016 WOODER</div>
			<div className={classes.center}>
				<div className={classes.WOODER}>W O O D E R</div>
				<div className={classes.Line}><Line backgroundColor={'bea67c'} height={4} width={54} margin={0}/></div>
			</div>
			<div className={classes.autor}>
				<div className={classes.Designed}>Designed by</div>
				<div className={classes.name}>Viacheslav Olianishyn</div>
			</div>
		</div>
	</footer>
}

export default Footer