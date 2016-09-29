$(function () {
    'use strict';

    /* Prevent Safari opening links when viewing as a Mobile App */
    (function (a, b, c) {
        if (c in b && b[c]) {
            var d, e = a.location,
                f = /^(a|html)$/i;
            a.addEventListener("click", function (a) {
                d = a.target;
                while (!f.test(d.nodeName)) d = d.parentNode;
                "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
            }, !1)
        }
    })(document, window.navigator, "standalone");
    var duration_CONSTANT = 250;
    var options = {
        prefetch: true,
        cacheLength: 20,
        blacklist: '.no-smoothState',
        onStart: {
            duration: duration_CONSTANT,
            render: function ($container) {
                $('#bottom-sheet').closeModal();
                $container.addClass('is-exiting');
                smoothState.restartCSSAnimations();
                setTimeout(function () { }, duration_CONSTANT * 2);
            }
        },
        onReady: {
            duration: 0,
            render: function ($container, $newContent) {
                $container.removeClass('is-exiting');
                $container.html($newContent);
            }
        },
        onAfter: function ($container, $newContent) {
            setTimeout(function () {
                ResizeHandler = ResizeHandler || function () { };
                ResizeHandler();
            }, 500)
            initiate_plugins(); // All onAfter calls goes inside this function
        }
    };
    var smoothState = $('#main').smoothState(options).data('smoothState');
});
////--> Call all function for Ajax <--////
function initiate_plugins() {

    // Tabs
    $('ul.tabs').tabs();

    // Modal
    $('.modal-trigger').leanModal();

    // Accordion
    $('.collapsible').collapsible({
        accordion: true
    });

    // Drag
    $('.drag-target').remove();

    // Right Sidebar
    $('#open-right').sideNav({
        menuWidth: 240, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    // Left Sidebar
    $('#open-left').sideNav({
        menuWidth: 240, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  
    // Swipebox
    $('.swipebox').swipebox();

    // Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item'
    });
  
    // Scrolling Floating Action Button
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".floating-button").addClass("scrolled-down");
        } else {
            $(".floating-button").removeClass("scrolled-down");
        }
    });
  
    // Row Height for Drawer
    var grandparent_height = $('#grandparent').height();
    $('.child').height(grandparent_height * 0.25);

    // Swiper Sliders
    var swiper = new Swiper('.slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 5000,
        loop: true
    });
    var swiper = new Swiper('.slider-sliced', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000,
    });
    var swiper = new Swiper('.steps', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'fade',
    });
    var swiper = new Swiper('.slider-drawer', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });
    var swiper = new Swiper('.slider-vertical', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000,
        direction: 'vertical'
    });
  
    // MixItUP
    $(function () {
        var layout = 'grid', // Store the current layout as a variable
            $container = $('#filter'), // Cache the MixItUp container
            $changeLayout = $('#ChangeLayout'); // Cache the changeLayout button
        // Instantiate MixItUp with some custom options:
        try {
            $container.mixItUp('destroy');
        } catch (x) { }
        $container.mixItUp({
            animation: {
                animateChangeLayout: true, // Animate the positions of targets as the layout changes
                animateResizeTargets: true, // Animate the width/height of targets as the layout changes
                effects: 'fade rotateX(-40deg) translateZ(-100px)'
            },
            layout: {
                containerClass: 'grid' // Add the class 'list' to the container on load
            }
        });
        // MixItUp does not provide a default "change layout" button, so we need to make our own and bind it with a click handler:
        $changeLayout.on('click', function () {
            // If the current layout is a list, change to grid:
            if (layout == 'grid') {
                layout = 'list';
                $changeLayout.text('Grid'); // Update the button text
                $container.mixItUp('changeLayout', {
                    containerClass: layout // change the container class to "grid"
                });
                // Else if the current layout is a grid, change to list:  
            } else {
                layout = 'grid';
                $changeLayout.text('List'); // Update the button text
                $container.mixItUp('changeLayout', {
                    containerClass: layout // Change the container class to 'list'
                });
            }
        });
    });
  
    // Material Layout
    $('.parallax').parallax();
    $(function () {
        var hBanner = $('.h-banner').height();
        var cbHeight = hBanner - 56;
        var hHeight = hBanner - 86; // for Title
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= cbHeight) {
                $(".halo-nav").addClass('h-bg');
            }
            if (scroll <= cbHeight) {
                $(".halo-nav").removeClass('h-bg');
            }
            // For heading Title
            if (scroll >= hHeight) {
                $(".banner-title").hide();
                $(".halo-nav .title").show();
            }
            if (scroll <= hHeight) {
                $(".banner-title").show();
                $(".halo-nav .title").hide();
            }
        });
        // opacity Plush button
        var fadeStart = 50 // 100px scroll or less will equiv to 1 opacity
        fadeUntil = 150 // 150px scroll or more will equiv to 0 opacity
        fading = $('.resize');
        $(window).on('scroll', function () {
            var offset = $(document).scrollTop(),
                opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css({
                'transform': 'scale(' + opacity + ')'
            });
        });
    });

    // Chart
    // Charts
    // LINE GRAPH
    var lineChartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(100, 181, 246, 0.5)",
            strokeColor: "#90caf9",
            pointColor: "transparent",
            pointStrokeColor: "rgba(41, 128, 185, 0)",
            pointHighlightFill: "rgba(41, 128, 185, 0.9)",
            pointHighlightStroke: "rgba(41, 128, 185, 0)",
            data: [100, 70, 20, 155, 50, 70, 50]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(155, 89, 182, 0.5)",
            strokeColor: "rgba(155, 89, 182, 0.6)",
            pointColor: "rgba(155, 89, 182, 0.9)",
            pointStrokeColor: "rgba(231, 76, 60, 255, 0)",
            pointHighlightFill: "rgba(155, 89, 182, 0.9)",
            pointHighlightStroke: "rgba(231, 76, 60, 0)",
            data: [28, 54, 40, 19, 37, 20, 90]
        }]
    }
    // PIE CHART
    var pieData = [{
        value: 33,
        color: "#BBDEFB",
        highlight: "#29b6f6",
        label: "New"
    }, {
        value: 66,
        color: "#ffcc80",
        highlight: "#ffa726",
        label: "Completed"
    }, {
        value: 66,
        color: "#e1bee7",
        highlight: "#ba68c8",
        label: "Cancelled"
    }];
    // Doughnut Chart
    var doughnutData = [{
        value: 250,
        color: "#BBDEFB",
        highlight: "#42a5f5",
        label: "Search"
    }, {
        value: 70,
        color: "#EF9A9A",
        highlight: "#ef5350",
        label: "Bounce"
    }, {
        value: 100,
        color: "#fff9c4",
        highlight: "#fff176",
        label: "New"
    }];
    // Bar Chart
    var barChartData = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            fillColor: "rgba(100, 181, 246, 0.5)",
            strokeColor: "#90caf9",
            highlightFill: "rgba(41, 128, 185, 0.9)",
            highlightStroke: "rgba(41, 128, 185, 0)",
            data: [65, 59, 90, 56, 40]
        }, {
            fillColor: "rgba(155, 89, 182, 0.5)",
            strokeColor: "rgba(155, 89, 182, 0.6)",
            highlightFill: "rgba(155, 89, 182, 0.9)",
            highlightStroke: "rgba(231, 76, 60, 0)",
            data: [28, 48, 19, 27, 90]
        }]
    }
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true,
    });
    var ctx2 = document.getElementById("pieChart").getContext("2d");
    window.myPie = new Chart(ctx2).Pie(pieData, {
        animation: true,
        responsive: true
    });
    var ctx3 = document.getElementById("barChart").getContext("2d");
    window.myBar = new Chart(ctx3).Bar(barChartData, {
        responsive: true
    });
    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    window.myPie = new Chart(ctx4).Doughnut(doughnutData, {
        animation: true,
        responsive: true
    });

    // Pattern-Select
    $(function() {

        var xmlhttp = new XMLHttpRequest();
        var url = "data/patterns.json";

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
                $('#pattern_grid').append(patternDiv(arr.patterns[i].src, arr.patterns[i].name, arr.patterns[i].content))
            }
        }
    });

    // w3IncludeHTML - html include code
    $(function w3IncludeHTML() {
        var z, i, a, file, xhttp;
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            if (z[i].getAttribute("w3-include-html")) {
                a = z[i].cloneNode(false);
                file = z[i].getAttribute("w3-include-html");
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        a.removeAttribute("w3-include-html");
                        a.innerHTML = xhttp.responseText;
                        z[i].parentNode.replaceChild(a, z[i]);
                        w3IncludeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    })
}
////--> End of Call all function for Ajax, now from there recall all the functions <--////


// Tabs
$('ul.tabs').tabs();

// Modal
$('.modal-trigger').leanModal();

// Accordion
$('.collapsible').collapsible({
    accordion: true
});

// Right Sidebar
$('#open-right').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// Left Sidebar
$('#open-left').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// Swipebox
$('.swipebox').swipebox();

// Masonry
$('.grid').masonry({
    itemSelector: '.grid-item'
});

// Scrolling Floating Action Button
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(".floating-button").addClass("scrolled-down");
    } else {
        $(".floating-button").removeClass("scrolled-down");
    }
});

// Row Height for Drawer
var grandparent_height = $('#grandparent').height();
$('.child').height(grandparent_height * 0.25);

// Swiper sliders
var swiper = new Swiper('.slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 5000,
    loop: true
});
var swiper = new Swiper('.slider-sliced', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
});
var swiper = new Swiper('.steps', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade',
});
var swiper = new Swiper('.slider-drawer', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
});
var swiper = new Swiper('.slider-vertical', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
    direction: 'vertical'
});

// Material Layout
$('.parallax').parallax();
$(function () {
    var hBanner = $('.h-banner').height();
    var cbHeight = hBanner - 56;
    var hHeight = hBanner - 86; // for Title
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= cbHeight) {
            $(".halo-nav").addClass('h-bg');
        }
        if (scroll <= cbHeight) {
            $(".halo-nav").removeClass('h-bg');
        }
        // For heading Title
        if (scroll >= hHeight) {
            $(".banner-title").hide();
            $(".halo-nav .title").show();
        }
        if (scroll <= hHeight) {
            $(".banner-title").show();
            $(".halo-nav .title").hide();
        }
    });
    // opacity Plush button
    var fadeStart = 50 // 100px scroll or less will equiv to 1 opacity
    fadeUntil = 150 // 150px scroll or more will equiv to 0 opacity
    fading = $('.resize');
    $(window).on('scroll', function () {
        var offset = $(document).scrollTop(),
            opacity = 0;
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        }
        fading.css({
            'transform': 'scale(' + opacity + ')'
        });
    });
});

// MixItUp
$(function () {
    var layout = 'grid', // Store the current layout as a variable
        $container = $('#filter'), // Cache the MixItUp container
        $changeLayout = $('#ChangeLayout'); // Cache the changeLayout button
    // Instantiate MixItUp with some custom options:
    $container.mixItUp({
        animation: {
            animateChangeLayout: true, // Animate the positions of targets as the layout changes
            animateResizeTargets: true, // Animate the width/height of targets as the layout changes
            effects: 'fade rotateX(-40deg) translateZ(-100px)'
        },
        layout: {
            containerClass: 'grid' // Add the class 'list' to the container on load
        }
    });
    // MixItUp does not provide a default "change layout" button, so we need to make our own and bind it with a click handler:
    $changeLayout.on('click', function () {
        // If the current layout is a list, change to grid:
        if (layout == 'grid') {
            layout = 'list';
            $changeLayout.text('Grid'); // Update the button text
            $container.mixItUp('changeLayout', {
                containerClass: layout // change the container class to "grid"
            });
            // Else if the current layout is a grid, change to list:  
        } else {
            layout = 'grid';
            $changeLayout.text('List'); // Update the button text
            $container.mixItUp('changeLayout', {
                containerClass: layout // Change the container class to 'list'
            });
        }
    });
  
    // init swiper layout
    window.onload = function () {
        setTimeout(function () {
            ResizeHandler = ResizeHandler || function () { };
            ResizeHandler();
        }, 500)
    };

});

// pattern-template
function patternDiv(src, name, content) {
    var patternDiv = "";
    patternDiv += "<div class='grid-item gallery-item-card'>"
    patternDiv += "<a href='"+src+"' class='swipebox no-smoothState' title='This is dummy caption.'>"
    patternDiv += "<img src='"+src+"' alt='image'>"
    patternDiv += "</a>"
    patternDiv += "<div class='gallery-item-header'>"
    patternDiv += "<div class='gallery-item-author'>"
    patternDiv += "<span>'"+name+"'</span>"
    patternDiv += "<span class='small'>"+content+"</span>"
    patternDiv += "<a href='paint-draw.html' class='waves-effect waves-light btn font-size-12'>무늬 선택</a>"
    patternDiv += "</div></div></div>"
    return patternDiv;
}

// Pattern-Select
$(function() {

    var xmlhttp = new XMLHttpRequest();
    var url = "data/patterns.json";

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
            $('#pattern_grid').append(patternDiv(arr.patterns[i].src, arr.patterns[i].name, arr.patterns[i].content))
        }
    }
});

// w3IncludeHTML - html include code
$(function w3IncludeHTML() {
    var z, i, a, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        if (z[i].getAttribute("w3-include-html")) {
            a = z[i].cloneNode(false);
            file = z[i].getAttribute("w3-include-html");
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    a.removeAttribute("w3-include-html");
                    a.innerHTML = xhttp.responseText;
                    z[i].parentNode.replaceChild(a, z[i]);
                    w3IncludeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
})
