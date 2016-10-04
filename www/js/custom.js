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
                setTimeout(function () {
                }, duration_CONSTANT * 2);
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
                ResizeHandler = ResizeHandler || function () {
                    };
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
        } catch (x) {
        }
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

    // Pattern-Select
    $(function () {

        var xmlhttp = new XMLHttpRequest();
        var url = "data/patterns.json";

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                jsonRender(this.responseText);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function jsonRender(response) {
            var arr = JSON.parse(response);

            for (var i = 0; i < arr.patterns.length; i++) {
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
                xhttp.onreadystatechange = function () {
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

    // category intro page
    $(function category_intro() {
        var noneCheck = false;
        category = window.location.search.substring(1);

        $.ajax({
            url: './data/categorys.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // null 값 전송시 처리
                data.forEach(function(item) {
                    if(item.id == category) {
                        category = item
                        noneCheck = true;
                    }
                });
                if(noneCheck == false) {
                    category = data[0]
                }

                var audioData = category.mp3Url
                $('#titleData').html(category.title);
                $('#contentData').html(category.introduce);

                // 오디오 시작부분 //
                var audio = new Audio(audioData);
                $("#voicePlay").click(function () {
                    if (audio.paused) {
                        audio.play();
                    }
                    else {
                        audio.pause();
                    }
                });
                // 오디오 끝나는부분 //
            }
        }) // ajax
    }) // function


}
////--> End of Call all function for Ajax, now from there recall all the functions <--////
////--> End of Call all function for Ajax, now from there recall all the functions <--////
////--> End of Call all function for Ajax, now from there recall all the functions <--////
////--> End of Call all function for Ajax, now from there recall all the functions <--////
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
            ResizeHandler = ResizeHandler || function () {
                };
            ResizeHandler();
        }, 500)
    };

});

// pattern-template
function patternDiv(src, name, content) {
    var patternDiv = "";
    patternDiv += "<div class='grid-item gallery-item-card'>"
    patternDiv += "<a href='" + src + "' class='swipebox no-smoothState' title='This is dummy caption.'>"
    patternDiv += "<img src='" + src + "' alt='image'>"
    patternDiv += "</a>"
    patternDiv += "<div class='gallery-item-header'>"
    patternDiv += "<div class='gallery-item-author'>"
    patternDiv += "<span>'" + name + "'</span>"
    patternDiv += "<span class='small'>" + content + "</span>"
    patternDiv += "<a href='paint-draw.html' class='waves-effect waves-light btn font-size-12'>무늬 선택</a>"
    patternDiv += "</div></div></div>"
    return patternDiv;
}

// Pattern-Select
$(function () {

    var xmlhttp = new XMLHttpRequest();
    var url = "data/patterns.json";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            jsonRender(this.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function jsonRender(response) {
        var arr = JSON.parse(response);

        for (var i = 0; i < arr.patterns.length; i++) {
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
            xhttp.onreadystatechange = function () {
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

// 페이지가 load시 today 수가 증가 - 한번만 되면 되기 때문에 initiate_plugins() 안에 처리하지 않음
$(function index_init() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == 'index') {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            // if ( ajax 정상작동 했을시)
            if (this.readyState == 4 && this.status == 200) {
                console.log('today 작업 : ' + this.responseText)
                // document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", window.temp_domain + "todayLoad", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
    }
});

var category;
// category intro page
$(function category_intro() {
    var noneCheck = false;
    category = window.location.search.substring(1);

    $.ajax({
        url: './data/categorys.json', 
        type: 'GET',
        dataType: 'json', 
        success: function(data) {
            // null 값 전송시 처리
            data.forEach(function(item) {
                if(item.id == category) {
                    category = item
                    noneCheck = true;
                }
            });
            if(noneCheck == false) {
                category = data[0]
            }
            
            var audioData = category.mp3Url
            $('#titleData').html(category.title);
            $('#contentData').html(category.introduce);

            // 오디오 시작부분 //
            var audio = new Audio(audioData);
            $("#voicePlay").click(function () {
                if (audio.paused) {
                    audio.play();
                }
                else {
                    audio.pause();
                }
            });
            // 오디오 끝나는부분 //
        }
    }) // ajax
}) // function


