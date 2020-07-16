import React from 'react';
import classes from './Header.module.css';
import { connect } from 'react-redux';
import {Hidemenu} from '../../Redux/DataReducer';
import { Link, animateScroll as scroll } from "react-scroll";
import '../../App.css';

let Click = false;

const Header = (props) =>{
	const Menu_view = () =>{
		if (window.innerWidth < 426) {		
			props.Hidemenu(Click);
			Click = !Click;

		}
		if (window.innerWidth > 426) {		
			props.Hidemenu(true);
			Click = false;
		}
	}

	return <header className={classes[ props.Menu ? "Header" : "HeaderNEW"]} >
		<div className={classes[ props.Menu ? "Header_menu" : "Header_menuNEW"]} >
			<div onClick={Menu_view}>
				<div className={classes.line}></div>
				<div className={classes.line}></div>
				<div className={classes.line}></div>
			</div>
			<div className={classes.Header_menu_text} >MENU</div>
		</div>
		<div className={classes[ props.Menu ? "Big_line" : "Big_lineNEW"]}></div>
		<ul className={classes[ props.Menu ? "HeaderUl" : "HeaderUlNEW"]}>
			<li><Link
				    activeClass="active"
				    to="section1"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration= {1000}
				>HOME</Link>
			</li>
			<li><Link
				    activeClass="active"
				    to="section2"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration= {1000}
				>PRODUCTS</Link>
			</li>
			<li><Link
				    activeClass="active"
				    to="section3"
				    spy={true}
				    smooth={true}
				    offset={-550}
				    duration= {1000}
				>ABOUT</Link>
			</li>
		</ul>
		<div className={classes[ props.Menu ? "Header_circle" : "Header_circleNEW"]}><div>i</div></div>
		<div className={classes[ props.Menu ? "Header_arrow" : "Header_arrowNEW"]}>EN &#9660;</div>
	</header>
}

const mapStateToProps = (state) => {
    return{
       Menu:state.Data.Menu
    }    
}

export default connect(mapStateToProps, {Hidemenu})(Header); 