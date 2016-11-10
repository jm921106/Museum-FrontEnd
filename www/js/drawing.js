/**
 * Created by superMoon on 2016-10-03.
 */

var eraser = false;
var pencil = false;
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
pencilSelect();
var ink = "black";

outlineImage.src = "./img/patterns/pattern_1.png";
context = document.getElementById('myCanvas').getContext("2d");


$('#myCanvas').on('touchstart', function (e) {
    var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
        mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;
    paint = true;
    addClick(mouseX, mouseY);
    redraw();
});
$('#myCanvas').on('touchmove', function (e) {
    var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
        mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;
    if (paint) {
        addClick(mouseX, mouseY, true);
        redraw();
    }
});
$('#myCanvas').on('touchend', function (e) {
    // console.log('in touchend');
    paint = false;
});
function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickColor.push(ink);
    clickSize.push(curSize);
    console.log("x,y,dragging push");
}
function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    context.lineJoin = "round";

    for (var i = 1; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.strokeStyle = clickColor[i];
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickSize[i];
        context.stroke();
    }
    context.drawImage(outlineImage, 0, 0, context.canvas.width, context.canvas.height);
}
function setColor(color) {
    console.log("color select");
    if (eraser == true) {
        pencilSelect();
    }
    ink = color;
}
function setCurSize() {
    if (pencil == true) {
        curSize = $("#sizeSlider").val();
        console.log("set pencil Size");
    } else if (eraser == true) {
        curSize = $("#sizeSlider").val() * 2;
        console.log("set  eraser Size");
    } else if (brush == true) {
        curSize = 20 + $("#sizeSlider").val() * 3;
        console.log("set brush Size");
    }
}
function eraserSelect() {
    setColor("white");
    eraser = true;
    pencil = false;
    brush = false;
    console.log("is eraser");
    setCurSize();

    $("#eraser").addClass("tool-select");
    $("#pencil").removeClass("tool-select");
    $("#brush").removeClass("tool-select");
}
function pencilSelect() {
    eraser = false;
    pencil = true;
    brush = false;
    console.log("is pencil");
    setCurSize();
    $("#eraser").removeClass("tool-select");
    $("#pencil").addClass("tool-select");
    $("#brush").removeClass("tool-select");
}
function brushSelect() {
    eraser = false;
    pencil = false;
    brush = true;
    console.log("is brush");
    setCurSize();
    $("#eraser").removeClass("tool-select");
    $("#pencil").removeClass("tool-select");
    $("#brush").addClass("tool-select");
}

