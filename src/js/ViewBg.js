// ViewBg.js
import View from './libs/View';
import vs from './shaders/bg.vert';
import fs from './shaders/bg.frag';
import * as glm from 'gl-matrix';
import { ArrayBuffer } from './libs/glBuffer';
import { rgb } from './libs/Util';

var Quad = require('gl-quad');



function style(opt, prg) {
    if (!opt) {
        return
    }

    for (let k in opt) {
        if (typeof prg[k] == 'function') {
            prg[k](opt[k])
        }

    }
}

const  colorA = rgb('#60acd8'),colorB = rgb('#143251')

class ViewBg extends View {
    constructor() {
        super(vs, fs);
    }

    //  PRIVATE MATHODS
    _init() {
    	this.quad =Quad(gl)
        this.prg.use();
        let width = window.innerWidth,
            height = window.innerHeight;
        let matrix = glm.mat4.create();

        let radius = Math.max(width, height) * 1.05

        this.prg.style({
            scale: [ 1/width * width, 1/height * width],
            aspect: 1,
            color1: colorA,
            color2: colorB,
            smoothing: [ -0.1, 1.0 ],
            noiseAlpha: 0.03,
        });
    }

    //	PUBLIC METHODS
    render() {
        
        this.prg.use();
       

        // gl.drawArrays(gl.TRIANGLES, 0, 6);
        // drawTriangle(gl)
        this.quad.draw( this.prg )
    }

}
export default ViewBg;
