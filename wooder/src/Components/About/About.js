import React from 'react';
import classes from './About.module.css';
import Line from '../Line/Line';
import '../../App.css';


const About = () =>{
	let Strlenght = getComputedStyle(document.body).width;
	let Width = Number(Strlenght.substring(0, Strlenght.length - 2)); 
	return <section  id="section3">
		<div className={classes.block}>
			<div className={classes.img}>
				<img src={'/images/WOODER-Free-PSD-Template_03_03.png'}/>
			</div>
			<div className={classes.Lines} style={{top: 400*Width/1920/100*28.7+'px'}}>
				<div className={classes.Line}>
					<Line backgroundColor={'000'} height={2} width={151/1920*Width} margin={0}/>
				</div>
				<div className={classes.Line} style={{marginLeft: 100/1920*Width+'px'}}>
					<Line backgroundColor={'bea67c'} height={4} width={44/1920*Width} margin={0}/>
				</div>	
			</div>
			<div className={classes.text}>
				<div className={classes.text_block}>
					<div className={classes.Name}>About Us</div>
					<div>We are a team of professionals in the wood processing and the creation of wooden furniture of the highest class</div>
					<div className={classes.Learn}>
						<div className={classes.Learn_text}>LEARN MORE &#8594;</div>
						<Line backgroundColor={'bea67c'} height={2} width={44} margin={0}/>
					</div>
				</div>
			</div>
		</div>
	</section>
}

export default About