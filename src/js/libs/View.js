// View.js
import Program from './glProgram';
import GL from './glTools';

class View {
	constructor(mVertShader,mFragShader){
		this.prg = new Program(gl);
		this.prg.compile(mVertShader,mFragShader);
		
		this._init();

	}

	//  PRIVATE MATHODS
	_init(){

	}


	//	PUBLIC METHODS
	render(){

	}
		


}
export default View;