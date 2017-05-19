// Util.js
import colorString from 'color-string';

function rgb(str) {

    let t = colorString.get.rgb(str).map(function(c) {
        return c/255
    })
    t.pop()
    return t;
}



module.exports = {
	rgb:rgb
};