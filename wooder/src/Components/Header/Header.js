import React from 'react';
import classes from './Header.module.css';
import { connect } from 'react-redux';
import Hidemenu from '../../Redux/DataReducer';


const Header = () =>{



	return <header className={classes.Header} onClick={ () => {alert('no work')}}>
		<div className={classes.Header_menu}>
			<div>
				<div className={classes.line}></div>
				<div className={classes.line}></div>
				<div className={classes.line}></div>
			</div>
			<div className={classes.Header_menu_text} tabIndex="0" onClick={ () => {alert('no work')}}>MENU</div>
		</div>
		<div className={classes.Big_line}></div>
		<ul className={classes.HeaderUl}>
			<li>HOME</li>
			<li>PRODUCTS</li>
			<li>ABOUT</li>
		</ul>
		<div className={classes.Header_circle} >i</div>
		<div className={classes.Header_arrow}>EN &#9660;</div>
	</header>
}

const mapStateToProps = (state) => {
    return{
       Menu:state.Data.Menu
    }    
}

export default connect(mapStateToProps,{Hidemenu})(Header); 