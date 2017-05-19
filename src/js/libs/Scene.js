import Scheduler from 'scheduling';
import GL from './glTools';

class Scene {
	constructor(){
		this._init();
		this._initTextures();
		this._initViews();

		GL.setSize(window.innerWidth,window.innerHeight);
		
		Scheduler.addEF(() => this._loop());
		window.addEventListener('resize',(e) => this.resize(e))
	}

	//PRIVATE MATHODS
	_init(){

	}

	_initTextures(){

	}

	_initViews(){

	}

	_loop(){
		GL.setViewport(0, 0, GL.width, GL.height);
		this.render();
	}

	//PUBLIC MATHODS
	resize(mWidth,mHeight){
		if(!mHeight){
			GL.setSize(window.innerWidth,window.innerHeight);
		}else{
			GL.setSize(mWidth,mHeight);
		}
	}
	render(){

	}
}
export default Scene;