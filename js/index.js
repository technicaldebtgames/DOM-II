// Your code goes here

// Grab some stuff

let allImgs = document.querySelectorAll("img");

let busImg = allImgs[0];
let mapImg = allImgs[1];
let canalImg = allImgs[2];
let beachImg = allImgs[3];

// Add some (10) event listeners

    /*  
    filter: blur(5px);
    filter: brightness(0.4);
    filter: contrast(200%);
    filter: drop-shadow(16px 16px 20px blue);
    filter: grayscale(50%);
    filter: hue-rotate(90deg);
    filter: invert(75%);
    filter: opacity(25%);
    filter: saturate(30%);
    filter: sepia(60%); 
    */

//dblclick

//mousedown

function mouseDownFunc(event) {

    event.target.style['border-radius'] = '150px';

}

//mouseup

function mouseUpFunc(event) {

    event.target.style['border-radius'] = '10px';

}

//mouseenter

function mouseEnterFunc(event) {

    event.target.style.padding = '50px';

}

//mouseover

//mouseleave

function mouseLeaveFunc(event) {

    event.target.style.padding = '0px';

}

//mouseout

//mousemove

//wheel

//keypress



// Add to elements

busImg.addEventListener('mouseenter', mouseEnterFunc);
busImg.addEventListener('mouseleave', mouseLeaveFunc);

beachImg.addEventListener('mousedown', mouseDownFunc);
beachImg.addEventListener('mouseup', mouseUpFunc);