import React from 'react';
import classes from './Video.module.css';
import { connect } from 'react-redux';
import Line from '../Line/Line';

const Video = (props) =>{

	return <section className={classes.sectionV} >

		<div className={classes.block}>
			
			<div className={classes.body}>
				<div className={classes.Lines}>
					<div className={classes.Line}>
						<Line backgroundColor={'fff'} height={1} width={151} margin={0}/>
					</div>
					<div className={classes.Line}>
						<Line backgroundColor={'bea67c'} height={4} width={44} margin={0}/>
					</div>				
				</div>
				<div className={classes.Message}>
					<div className={classes.Name}>{props.Video.Name}</div>
					<div className={classes.text}>{props.Video.text}</div>
					<div className={classes.watch}>
						<div className={classes.Watch_body}>
							<img src={`/images/play_07.png`}/>
							<div className={classes.watch_text} onClick={ () => {alert('video')}}>Watch video</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img src={`/images/WOODER-Free-PSD-Template_06.png`} className={classes.img} />
	</section>	
}

const mapStateToProps = (state) => {
    return{
       Video: state.Data.Video,
    }    
}

export default connect(mapStateToProps)(Video); 
