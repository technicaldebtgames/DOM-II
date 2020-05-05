// Your code goes here



// Set some stuff

let hueRotate = 0;



// Grab some stuff

let allImgs = document.querySelectorAll("img");

let busImg = allImgs[0];
let mapImg = allImgs[1];
let canalImg = allImgs[2];
let beachImg = allImgs[3];



// Create (10) event listener funcs

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

function mouseMoveFunc(event) {

    let rot = Math.random() * 360;

    event.target.style.filter = 'hue-rotate(' + rot + 'deg)';

}

//contextmenu

function contextMenuFunc(event) {

    event.target.style.width = '0px'; // "deletes" the image (from view)

}

//load

function loadFunc(event) {

    event.target.style.filter = 'invert(100%)';

}



// Add to elements

busImg.addEventListener('mouseenter', mouseEnterFunc);
busImg.addEventListener('mouseleave', mouseLeaveFunc);

beachImg.addEventListener('mousedown', mouseDownFunc);
beachImg.addEventListener('mouseup', mouseUpFunc);

mapImg.addEventListener('dblclick', mouseDblClickFunc);

canalImg.addEventListener('mouseover', mouseOverFunc);
canalImg.addEventListener('mouseout', mouseOutFunc);

busImg.addEventListener('load', loadFunc);       // These are strange, in chrome they sometimes
beachImg.addEventListener('load', loadFunc);     // don't seem to trigger. It might be caused by
mapImg.addEventListener('load', loadFunc);       // debugging or something. Not sure.
canalImg.addEventListener('load', loadFunc);     // Maybe it has to do with load vs loadeddata or
                                                 // something?

busImg.addEventListener('mousemove', mouseMoveFunc);
beachImg.addEventListener('mousemove', mouseMoveFunc);
canalImg.addEventListener('mousemove', mouseMoveFunc);

busImg.addEventListener('contextmenu', contextMenuFunc);
beachImg.addEventListener('contextmenu', contextMenuFunc);
mapImg.addEventListener('contextmenu', contextMenuFunc);