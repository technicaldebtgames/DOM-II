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

function mouseDblClickFunc(event) {

    if(event.target.style.filter == 'blur(5px)') {

        event.target.style.filter = '';

    }
    else {

        event.target.style.filter = 'blur(5px)';

    }

}

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

function mouseOverFunc(event) {

    event.target.style.width = '250px';

}

//mouseleave

function mouseLeaveFunc(event) {

    event.target.style.padding = '0px';

}

//mouseout

function mouseOutFunc(event) {

    event.target.style.width = '100%';

}

//mousemove

//wheel

//keypress



// Add to elements

busImg.addEventListener('mouseenter', mouseEnterFunc);
busImg.addEventListener('mouseleave', mouseLeaveFunc);

beachImg.addEventListener('mousedown', mouseDownFunc);
beachImg.addEventListener('mouseup', mouseUpFunc);

mapImg.addEventListener('dblclick', mouseDblClickFunc);

canalImg.addEventListener('mouseover', mouseOverFunc);
canalImg.addEventListener('mouseout', mouseOutFunc);