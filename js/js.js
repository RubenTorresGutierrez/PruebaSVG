/**
*   @file 
*   @description
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'
window.onload = iniciar;

function iniciar(){

    setTimeout(cambiar, 1000);

}

function cambiar(){

    let c1 = document.getElementById('circulo1');
    c1.setAttribute('fill', 'lime');

}