import React from 'react';
import classes from './Quality.module.css';
import Line from '../Line/Line';
import { connect } from 'react-redux';
import QualityElement from './QualityElement/QualityElement';

const Quality = (props) =>{
	return <section className={classes.sectionQ}>
		<div className={classes.body}>
			<div className={classes.Text}>
				<h2>wooder – is quality</h2>
				<div className={classes.Line}>
					<Line width={'44'} height={'4'} backgroundColor={'c0af91'} margin={'20'}/>
				</div>
				<div className={classes.text}>We create unique design objects made of rare wood, specially under the order. Look at the short video about our work.</div>
			</div>
			<div className={classes.img}>
				{props.Quality.map(el => <QualityElement src={el.src} key={el.src} text={el.text}/>)}
			</div>
		</div>
	</section>
}
const mapStateToProps = (state) => {
    return{
       Quality: state.Data.Quality,
    }    
}

export default connect(mapStateToProps,)(Quality); 