import Scene from './libs/Scene';
import GL from './libs/glTools';
import ViewBg from './ViewBg';


class SceneApp extends Scene{
	constructor(){
		super();
		this._vBg = new ViewBg();
	}

	//  PRIVATE MATHODS
	_init(){

	}

	//	PUBLIC METHODS
	render(){

		
		gl.clearColor(0, 0, .1, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

		this._vBg.render();
		
	}
		


	//  GETTERS AND SETTERS

}
export default SceneApp;
