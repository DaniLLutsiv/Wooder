import React from 'react';
import Wooder from './../../../img/images/WOODER-Free-PSD-Template_03.png';
import classes from './Product.module.css';
import Product_text_L from './Product_text/Product_text_L';
import Product_text_R from './Product_text/Product_text_R';

const Product = (props) =>{
	return <div className={classes.Body}>
				{props.number % 2 !== 0 ? <div className={classes.Text}><Product_text_L {...props}/></div> : ''}
				<div className={classes.imgContainer}><img src={props.src} className={classes.img} /></div>
				{props.number % 2 == 0 ? <div className={classes.Text}><Product_text_R {...props}/></div> : ''}
			</div>
} 
export default Product;