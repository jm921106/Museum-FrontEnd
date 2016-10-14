// /**
//  * Created by superMoon on 2016-10-03.
//  */
// // color setting
// var colorRed = "#ff0000";
// var colorPurple = "#cb3594";
// var colorGreen = "#659b41";
// var colorYellow = "#ffcf33";
// var colorBrown = "#986928";
// var colorBlue = "#0000ff";
//
// // now color setting
// var curColor = colorPurple;
// var clickColor = new Array();
//
// // clickSize setting
// var clickSize = new Array();
// var curSize = "normal";
//
// var clickX = new Array();
// var clickY = new Array();
// var clickDrag = new Array();
// var paint;
//
// context = document.getElementById('myCanvas').getContext("2d");
// // var canvasDiv = document.getElementById('canvasDiv');
// // canvas = document.createElement('canvas');
// // canvas.setAttribute('width', 2000);
// // canvas.setAttribute('height', 2000);
// // canvas.setAttribute('id', 'canvas');
// // canvasDiv.appendChild(canvas);
// // if(typeof G_vmlCanvasManager != 'undefined') {
// //     canvas = G_vmlCanvasManager.initElement(canvas);
// // }
// // context = canvas.getContext("2d");
//
//
// $('#myCanvas').on('touchstart', function(e) {
//     console.log('in touchstart');
//     // var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
//     //     mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
//     // var mouseX_1 = e.pageX - this.offsetLeft,
//     //     mouseY_1 = e.pageY - this.offsetTop;
//     var mouseX_2 = e.originalEvent.touches[0].pageX - this.offsetLeft,
//         mouseY_2 = e.originalEvent.touches[0].pageY - this.offsetTop;
//
//     // $('#testText').text('1 mouseX_1 start : ' + mouseX_1 + 'mouseX_2 start : ' + mouseX_2)
//
//     paint = true;
//     // addClick(mouseX_1, mouseY_1);
//     addClick(mouseX_2, mouseY_2);
//     redraw();
// });
// $('#myCanvas').on('touchmove', function(e) {
//     console.log('in touchmove');
//     // var mouseX_1 = e.pageX - this.offsetLeft,
//     //     mouseY_1 = e.pageY - this.offsetTop;
//     var mouseX_2 = e.originalEvent.touches[0].pageX - this.offsetLeft,
//         mouseY_2 = e.originalEvent.touches[0].pageY - this.offsetTop;
//
//     // $('#testText').text('2 mouseX_1 start : ' + mouseX_1 + 'mouseX_2 start : ' + mouseX_2)
//
//     if(paint){
//         // addClick(mouseX_1, mouseY_1, true);
//         // addClick(mouseX_2, mouseY_2, true);
//         // addClick(mouseX_1, mouseY_1);
//         addClick(mouseX_2, mouseY_2, true);
//         redraw();
//     }
// });
// $('#myCanvas').on('touchend', function(e) {
//     console.log('in touchend');
//
//     paint = false;
// });
//
//
// // $('#myCanvas').mousedown(function(e){
// //     // Mouse down location
// //     var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
// //         mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop
// //     console.log(mouseX);
// //     console.log(mouseY);
// //
// //     paint = true;
// //     addClick(mouseX, mouseY);
// //     redraw();
// // });
// // $('#myCanvas').mousemove(function(e){
// //     var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
// //         mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
// //     if(paint){
// //         addClick(mouseX, mouseY, true);
// //         redraw();
// //     }
// // });
// // $('#myCanvas').mouseup(function(e){
// //     paint = false;
// // });
// // $('#myCanvas').mouseleave(function(e){
// //     paint = false;
// // });
//
//
// function addClick(x, y, dragging)
// {
//     clickX.push(x);
//     clickY.push(y);
//     clickDrag.push(dragging);
// }
//
// function redraw(){
//     context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
//
//     context.strokeStyle = "#df4b26";
//     context.lineJoin = "round";
//     context.lineWidth = 5;
//
//     for(var i=0; i < clickX.length; i++) {
//         context.beginPath();
//         if(clickDrag[i] && i){
//             context.moveTo(clickX[i-1], clickY[i-1]);
//         }else{
//             context.moveTo(clickX[i]-1, clickY[i]);
//         }
//         context.lineTo(clickX[i], clickY[i]);
//         context.closePath();
//         context.stroke();
//     }
// }
//
//
// function changeToRed() {
//     curColor = colorRed
// }
//
// function changeToBlue() {
//     curColor = colorBlue
// }
//
// function changeToGreen() {
//     curColor = colorGreen
// }
//
// function changeToSmall() {
//     curSize = 'small'
// }
//
// function changeToNormal() {
//     curSize = 'normal'
// }
//
// function changeToLarge() {
//     curSize = 'large'
// }
//
// function changeToHuge() {
//     curSize = 'huge'
// }
