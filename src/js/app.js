import '../scss/main.scss';

import TweenMax from 'gsap';
import AssetsLoader from 'assets-loader';
import dat from 'dat-gui';
import GL from './libs/glTools';
import SceneApp from './SceneApp';
import Program from './libs/glProgram';
import Texture from './libs/glTexture';
import Fbo from './libs/glFbo';
import { ArrayBuffer } from './libs/glBuffer';
import Scheduler from 'scheduling';

if(document.body) {
	_init();
} else {
	window.addEventListener('DOMContentLoaded', _init);	
}

function _init () {
	document.querySelector('.progress-bar').innerHTML = '100%';
	setTimeout(()=> {
		document.body.classList.add('loaded');
	},250);

	let canvas = document.querySelector('canvas');

	GL.init(canvas);
    
	let scene = new SceneApp();

}
