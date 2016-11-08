var el, newPoint, newPlace, offset;

// Select all range inputs, watch for change
$("input[type='range']").change(function() {

    // Cache this for efficiency
    el = $(this);

    // Measure width of range input
    width = el.width();

    // Figure out placement percentage between left and right of input
    newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

    offset = -1;

    // Prevent bubble from going beyond left or right (unsupported browsers)
    if (newPoint < 0) { newPlace = 0; }
    else if (newPoint > 1) { newPlace = width; }
    else { newPlace = width * newPoint + offset; offset -= newPoint; }

    // Move bubble
    el
        .next("output")
        .css({
            left: newPlace,
            marginLeft: offset + "%"
        })
        .text(el.val());
})
// Fake a change to position bubble at page load
    .trigger('change');


/**
 * Created by superMoon on 2016-10-03.
 */
// color setting
// var colorRed = "#ff0000";
// var colorPurple = "#cb3594";
// var colorGreen = "#659b41";
// var colorYellow = "#ffcf33";
// var colorBrown = "#986928";
// var colorBlue = "#0000ff";

var eraser =false;
var pencil = true;
var brush = false;
var outlineImage = new Image();
var clickColor = new Array();

// clickSize setting
var clickSize = new Array();
var curSize = 5;

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

var ink = "black;"
clickColor.push("black");
pencilSelect();

//patternImage setting
outlineImage.onload = function() {
    redraw();
};
outlineImage.src = "./img/patterns/pattern_1.png";
context = document.getElementById('myCanvas').getContext("2d");

// var canvasDiv = document.getElementById('canvasDiv');
// canvas = document.createElement('canvas');

// canvas.setAttribute('id', 'canvas');
// canvasDiv.appendChild(canvas);
// if(typeof G_vmlCanvasManager != 'undefined') {
//     canvas = G_vmlCanvasManager.initElement(canvas);
// }
// context = canvas.getContext("2d");


$('#myCanvas').on('touchstart', function(e) {
    console.log('in touchstart');
    // var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
    //     mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
    // var mouseX = event.touches[0].pageX-this.offset.left,
    //     mouseY = event.touches[0].pageY-this.offset.top;
    var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
        mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;

    console.log(mouseX, mouseY);
    $('#testText').text('1 mouseX_1 start : ' + mouseX + 'mouseX_2 start : ' + mouseY)

    paint = true;
    addClick(mouseX, mouseY);
    redraw();
});
$('#myCanvas').on('touchmove', function(e) {
    console.log('in touchmove');
    // var mouseX = event.touches[0].pageX-this.offset.left,
    //     mouseY = event.touches[0].pageY-this.offset.top;
    var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
        mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;

    console.log(mouseX, mouseY);
    $('#testText').text('2 mouseX_1 start : ' + mouseX + 'mouseX_2 start : ' + mouseY)

    if(paint){
        addClick(mouseX, mouseY, true);
        redraw();
    }
});
$('#myCanvas').on('touchend', function(e) {
    console.log('in touchend');
    paint = false;
});


// $('#myCanvas').mousedown(function(e){
//     // Mouse down location
//     var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
//         mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop
//     console.log(mouseX);
//     console.log(mouseY);
//
//     paint = true;
//     addClick(mouseX, mouseY);
//     redraw();
// });
// $('#myCanvas').mousemove(function(e){
//     var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
//         mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
//     if(paint){
//         addClick(mouseX, mouseY, true);
//         redraw();
//     }
// });
// $('#myCanvas').mouseup(function(e){
//     paint = false;
// });
// $('#myCanvas').mouseleave(function(e){
//     paint = false;
// });


function addClick(x, y, dragging)
{
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);

}

function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    // context.strokeStyle = ink;
    //#df4b26
    context.lineJoin = "round";
    context.lineWidth = curSize;
    clickColor.push(ink);
    clickSize.push(curSize);



    for(var i=0; i < clickX.length; i++) {
        context.beginPath();
        if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
        }else{
            context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.strokeStyle = clickColor[i];
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickSize[i];
        context.stroke();
    }

    context.drawImage(outlineImage,0,0, context.canvas.width, context.canvas.height);
}

function setColor(color){
    if(eraser==true){
        pencilSelect();
    }
    ink = color;
}


    function setCurSize(){
        if(pencil==true) {
            curSize = $("#sizeSlider").val();
        }else if(eraser==true){
            curSize = $("#sizeSlider").val()*2;
        }else if(brush==true){
            curSize = 20 + $("#sizeSlider").val()*3;
        }
    }

    function eraserSelect(){
        setCurSize();
        setColor("white");
        eraser = true;
        pencil = false;
        brush = false;

    $("#eraser").addClass("tool-select")
    $("#pencil").removeClass("tool-select")
    $("#brush").removeClass("tool-select")

}

function pencilSelect(){
    eraser = false;
    pencil = true;
    brush = false;
    setCurSize();
    $("#eraser").removeClass("tool-select")
    $("#pencil").addClass("tool-select")
    $("#brush").removeClass("tool-select")
}

function brushSelect(){
    eraser = false;
    pencil = false;
    brush = true;
    setCurSize();
    $("#eraser").removeClass("tool-select")
    $("#pencil").removeClass("tool-select")
    $("#brush").addClass("tool-select")
}

