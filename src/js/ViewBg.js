// ViewBg.js
import View from './libs/View';
import vs from './shaders/bg.vert';
import fs from './shaders/bg.frag';
import glm from 'gl-matrix';
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

function setUniform(position, value, type) {
    let code = ['']
    code.push('console.log("set uniform");');
    switch (type) {
        case 'bool':
        case 'int':
        case 'sampler2D':
        case 'samplerCube':
            code.push('gl.uniform1i(position,value)');
            break;
        case 'float':
            code.push('gl.uniform1f(position,value)');
            break;
        default:
            var vidx = type.indexOf('vec')
            if (0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
                var d = type.charCodeAt(type.length - 1) - 48
                if (d < 2 || d > 4) {
                    throw new Error('', 'Invalid data type')
                }
                switch (type.charAt(0)) {
                    case 'b':
                    case 'i':
                        code.push('gl.uniform' + d + 'iv(position,value)');
                        break;
                    case 'v':
                        code.push('gl.uniform' + d + 'fv(position,value)');
                        break;
                    default:
                        throw new Error('', 'Unrecognized data type for vector ' + name + ': ' + type)
                }
            } else if (type.indexOf('mat') === 0 && type.length === 4) {
                var d = type.charCodeAt(type.length - 1) - 48
                if (d < 2 || d > 4) {
                    throw new Error('', 'Invalid uniform dimension type for matrix ' + name + ': ' + type)
                }
                code.push('gl.uniformMatrix' + d + 'fv(position,false,value)');
            } else {
                throw new Error('', 'Unknown uniform data type for ' + name + ': ' + type)
            }
            break
    }
    code.push('');
    let proc = new Function('position', 'value', code.join('\n'));
    proc(position, value)
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

        // setUniform(this.prg.coloredNoise(),false,'bool');
        // setUniform(this.prg.aspect(),window.innerWidth/window.innerHeight,'float')
        // setUniform(this.prg.smoothing(), [-0.4, 0.8],'vec2')
        // setUniform(this.prg.color1(), [1, 1, 1],'vec3')
        // setUniform(this.prg.color2(), [0, 0, 0],'vec3')
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
