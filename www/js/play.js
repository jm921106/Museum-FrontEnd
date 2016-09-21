$(function() {

    var xmlhttp = new XMLHttpRequest();
    var url = "../../data/patterns.json";

    xmlhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonRender(this.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function jsonRender(response) {
        var arr = JSON.parse(response);

        for(var i=0; i<arr.patterns.length; i++) {
            // var href = './exp_pattern_play.html?index=1' + arr.patterns[i].index;
            $('#pattern_grid').append(
            "<div class='grid-item gallery-item-card'>" +
            "<a href='"+arr.patterns[i].src+"' class='swipebox no-smoothState' title='This is dummy caption.'>" +
            "<img src='"+arr.patterns[i].src+"' alt='image'>" +
            "</a>" +
            "<div class='gallery-item-header'>" +
            "<div class='gallery-item-author'>" +
            "<span>'"+arr.patterns[i].name+"'</span>" +
            "<span class='small'>"+arr.patterns[i].content+"</span>" +
            "<a href='paint-draw.html' class='waves-effect waves-light btn'>go to draw</a>" +
            "</div></div></div>"
            )
        }
    }
})
