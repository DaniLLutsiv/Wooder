import React from 'react';
import classes from './Body.module.css';
import Product from './Product/Product';
import { connect } from 'react-redux';
import Line from '../Line/Line';

//import jojo from './../../img/images/WOODER-Free-PSD-Template_03.png';

const Body = (props) => {

	let BodyElements = props.Product.map( d => <Product src={d.src} key={d.src} 
		Name={d.Name} text={d.text} number={d.number}/>) 
	return <section>
			<div className={classes.Body}>
				{BodyElements}
			</div>
			<div className={classes.Line}>
				<div className={classes.RotLine}>
					<Line backgroundColor={'bea67c'} height={4} width={51} margin={0}/>
				</div>
			</div>
	</section>
}

const mapStateToProps = (state) => {
    return{
       Product: state.Data.Product,
    }    
}


export default  connect(mapStateToProps, {})(Body);