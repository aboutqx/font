// ViewBg.js
import View from './libs/View';
import vs from './shaders/bg.vert';
import fs from './shaders/bg.frag';
import glm from 'gl-matrix';
import { ArrayBuffer } from './libs/glBuffer';
import { rgb } from './libs/Util';


const  colorA = rgb('#60acd8'),colorB = rgb('#143251')

class ViewText extends View {
    constructor() {
        super(vs, fs);
    }

    //  PRIVATE MATHODS
    _init() {


    }

    //	PUBLIC METHODS
    render() {
        this.prg.use();

    }

}
export default ViewText;
