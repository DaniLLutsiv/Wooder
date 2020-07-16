let initialState = { 
	Product:[{number:'01',src:'/images/WOODER-Free-PSD-Template_03.png',Name:'FURNITURE',text:'Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating new pieces made of reclaimed barnwood'},
	{number:'02',src:'/images/WOODER-Free-PSD-Template_07.png',Name:'DECOR',text:'We make all types of wooden decor as per design given by Architect,Interior designer, contractor which is suitable your premises. '}],
	
	Quality:[{src:'/images/WOODER1.png',text:'Innovative Design'},
	{src:'/images/WOODER2.png',text:'High-level Skills'},
	{src:'/images/WOODER3.png',text:'Quality Products'}],
	
	Video:{Name:`we Do the design 
	of any complexity`,text:`This is a team of professionals that make the furniture and 
	wood décor high standard. Creating modern designs. 
	Adhering to the global quality standards. And we are 
	doing work with love.`},

	Menu: true
}

const DataReducer = (state = initialState , action) => {

	switch(action.type){
		case 'HIDE-MENU' :
		return{
			...state,
			Menu: action.bool
		}
		

		default:
			return state;	
	} 	
}

export const Hidemenu = (bool) => {
	return {
		type:'HIDE-MENU',
		bool: bool
	}
}

export default DataReducer;