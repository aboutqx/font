//glTools.js
import glm from 'gl-matrix';
let gl;


const colors = new Float32Array([
	1.0, 0.0, 0.0, 1.0, // Red monkey
	0.0, 1.0, 0.0, 1.0, // Green monkey
	0.0, 0.0, 1.0, 1.0, // Blue monkey
	1.0, 1.0, 1.0, 1.0, // White monkey
]);

class glTools {
	constructor(){
		this.canvas,
		this._width,
		this._height,
		this._viewport = [0,0,0,0];
		this.identityMatrix  = glm.mat4.create();
	}

	//PRIVATE MATHODS


	//PUBLIC MATHODS
	init(mCanvas,mParameters){
		this.canvas = mCanvas;
		const ctx = this.canvas.getContext('webgl', mParameters) || this.canvas.getContext('experimental-webgl', mParameters);
		gl = this.gl = ctx;
		window.gl =gl;

		// this.enable(gl.DEPTH_TEST);
		// this.enable(gl.CULL_FACE);
		// this.enable(gl.BLEND);
	}

	setViewport(x, y, w, h) {
		let hasChanged = false;
		if(x !== this._viewport[0]) { hasChanged = true; }
		if(y !== this._viewport[1]) { hasChanged = true; }
		if(w !== this._viewport[2]) { hasChanged = true; }
		if(h !== this._viewport[3]) { hasChanged = true; }

		if(hasChanged) {
			this.gl.viewport(x, y, w, h);
			this._viewport = [x, y, w, h];
		}
	}

	setSize(mWidth,mHeight){
		this._width = mWidth;
		this._height = mHeight;

		this.canvas.width = mWidth;
		this.canvas.height = mHeight;
		if(gl){
			gl.viewport(0, 0, mWidth, mHeight);
		}
	}

	enable(mParameter) {	gl.enable(mParameter);		}

	disable(mParameter) {	gl.disable(mParameter);	}

	//GETTERS AND SETTERS
	get width() {	return this._width;		}

	get height() {	return this._height;	}
}

const GL = new glTools();

export default GL;