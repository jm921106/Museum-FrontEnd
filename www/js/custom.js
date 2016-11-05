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


    /**
     * w3IncludeHTML [HTML INCLUDE]
     *
     */
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

    /**
     * global val
     *
     */
    var audio = new Audio();
    var item;
    var category;

    /**
     * Play Part
     * [1] pattern summit
     * [2] result contents
     * [3]
     * [4]
     * [5]
     *
     */

// [1] 
    $('#pattern_submit').click(function () {
        var name = $('#name').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

        if (name == "" || phone == "" || address == "") {
            $('#modal_status').html('값을 정확히 입력해 주세요!').css("color", "red");
            return;
        }

        // var result = null;
        var canvas = document.getElementById('myCanvas');
        var dataURL = canvas.toDataURL();

        var url = window.temp_domain + "patternInsert";
        var post_data = {
            "user_id": "jm921106",
            "name": name,
            "phone": phone,
            "address": address,
            "result": dataURL
        }
        $.post(url, {
            user_id: "jm921106",
            name: name,
            phone: phone,
            address: address,
            result: dataURL
        }, function (data) {
            console.log('post ok')
            console.log(data)
            if (data)
                window.location.href = 'paint-result.html';
            else
                $('#modal_status').html('전송에 문제가 있습니다. 다시 시도해 주세요!').css("color", "red");
        });
    });

// [2] 
    $(function () {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page == 'paint-result.html') {
            var url = window.temp_domain + "patternFind";
            $.get(url, function (datas) {
                datas.forEach(function (data) {
                    // console.log(data.imgURL)
                    var img_url = window.temp_domain + "public/repository/" + data.imgURL;
                    patternAdd(data.user_id, getDateFormat(new Date(data.date)), img_url);
                })
            });
        }
    });

    /**
     * Panel Page [SET]
     * [1]
     * [2]
     * [3]
     * [4]
     * [5]
     * [6]
     */
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

    /**
     * Display Part
     * [1] display load
     * [2] facebook api
     * [3]
     * [4]
     * [5]
     *
     */
    $(function () {
        // [페이지 전환시 audio parse()]
        // if(audio.played) audio.pause();

        var post_data = window.location.search.substring(1);

        var path = window.location.pathname;
        var page = path.split("/").pop();
        switch (page) {
            // case 'display-intro.html':
            //     $.ajax({
            //         url: './data/categorys.json',
            //         type: 'GET',
            //         dataType: 'json',
            //         success: function (data) {
            //             audioSet(category.mp3Url);
            //             $('#titleData').html(category.title);
            //             $('#contentData').html(category.introduce);
            //         }
            //     });
            //     break;

            case 'display-list.html':
                // title setting & 전체 color 변경
                console.log('display-list.html case >>> title color 변경 필요')
                $.ajax({
                    url: './data/items.json',
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        if (post_data == undefined)
                            post_data = '1';

                        data[post_data].forEach(function (cat) {
                            // if (cat == category) {
                            listAdd(
                                post_data + '_' + cat.code,
                                cat.srcImg[0],
                                cat.title
                            );
                            // }
                        });
                    }
                });
                break;
            case 'display-content.html':
                $.ajax({
                    url: './data/items.json',
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        var arr = post_data.split('_');
                        if (arr[0] == "")
                            var arr = ['1', '1'];
                        var cat = data[arr[0]];
                        cat.forEach(function (item) {
                            if (item.code == arr[1]) {
                                item.srcImg.forEach(function (imgUrl) {
                                    imageSlideAdd(imgUrl);
                                });
                                // audioSet(item.mp3Url);
                                $('#item-title').html(item.subTitle);
                                $('#item-content').html(item.content);
                            }
                        })
                    }
                });
                break;
        }
    });

    // [2]
    // window.fbAsyncInit = function() {
    //     FB.init({
    //         appId      : '1698354810427614',
    //         xfbml      : true,
    //         version    : 'v2.8'
    //     });
    //     FB.AppEvents.logPageView();
    // };
//     $(function () {
//         var path = window.location.pathname;
//         var page = path.split("/").pop();
//         if(page == 'display-content.html') {
//             window.fbAsyncInit = function () {
//                 FB.init({
//                     appId: '1698354810427614',
//                     xfbml: true,
//                     version: 'v2.8'
//                 });
//                 $(document).ajaxComplete(function(){
//                     try{
//                         FB.AppEvents.logPageView();
// //                FB.XFBML.parse();
//                     }catch(ex){}
//                 });
//             };
//
//             $(function(d, s, id) {
//                 console.log('facebook function in after method')
//                 var js, fjs = d.getElementsByTagName(s)[0];
//                 if (d.getElementById(id)) {
//                     console.log(d.getElementById(id))
//                     return;
//                 }
//                 console.log(d.createElement(s))
//                 console.log(id)
//                 js = d.createElement(s); js.id = id;
//                 js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=268198800203862";
//                 fjs.parentNode.insertBefore(js, fjs);
//             }(document, 'script', 'facebook-jssdk'));
//         }
//     })
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
            ResizeHandler = ResizeHandler || function () {
                };
            ResizeHandler();
        }, 500)
    };

});

/**
 * w3IncludeHTML [HTML INCLUDE]
 *
 */
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

/**
 * global val
 *
 */
var audio = new Audio();
var item;
var category;

/**
 * Play Part
 * [1] pattern summit
 * [2] result contents
 * [3]
 * [4]
 * [5]
 *
 */

// [1] 
$('#pattern_submit').click(function () {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var address = $('#address').val();

    if (name == "" || phone == "" || address == "") {
        $('#modal_status').html('값을 정확히 입력해 주세요!').css("color", "red");
        return;
    }

    // var result = null;
    var canvas = document.getElementById('myCanvas');
    var dataURL = canvas.toDataURL();

    var url = window.temp_domain + "patternInsert";
    var post_data = {
        "user_id": "jm921106",
        "name": name,
        "phone": phone,
        "address": address,
        "result": dataURL
    }
    $.post(url, {
        user_id: "jm921106",
        name: name,
        phone: phone,
        address: address,
        result: dataURL
    }, function (data) {
        console.log('post ok')
        console.log(data)
        if (data)
            window.location.href = 'paint-result.html';
        else
            $('#modal_status').html('전송에 문제가 있습니다. 다시 시도해 주세요!').css("color", "red");
    });
});

// [2] 
$(function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == 'paint-result.html') {
        var url = window.temp_domain + "patternFind";
        $.get(url, function (datas) {
            datas.forEach(function (data) {
                // console.log(data.imgURL)
                var img_url = window.temp_domain + "public/repository/" + data.imgURL;
                patternAdd(data.user_id, getDateFormat(new Date(data.date)), img_url);
            })
        });
    }
});

/**
 * Panel Page [SET]
 * [1]
 * [2]
 * [3]
 * [4]
 * [5]
 * [6]
 */
// 페이지가 load시 today 수가 증가 - 한번만 되면 되기 때문에 initiate_plugins() 안에 처리하지 않음
$(function index_init() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (page) {
        case 'index.html':
            if(localStorage.getItem('user_id') == null) {
                console.log('최초 접속 유저]');
                var uniqueNumber = ID();
                localStorage.setItem('user_id', uniqueNumber);
            } else {
                console.log('기존 접속 유저');
            }

            url = window.temp_domain + "todayLoad";
            $.get(url, function (data) {
                console.log('today count complite')
            });
            break;
        case 'side-notice.html':
            var url = window.temp_domain + "getNotice";
            $.get(url, function(data) {
                data.forEach(function(notice, i) {
                    var date_str = getDateFormat(new Date(notice.date))
                    addNoticeList(notice.title, notice.contents, date_str, i)
                });
            });
            break;
        case 'side-myLike.html':
            console.log('in ~ side-myLike.html')
            // var url = window.temp_domain + "myLike";
            // $.post(url, {
            //     deviceInfo : localStorage.getItem('user_id')
            // } ,function(data) {
            //     console.log('post ok')
            // //     // data.forEach(function(myLike) {
            // //     //     myLikeAdd();
            // //     // });
            // });
            break;

    }
});
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

/**
 * Display Part
 * [1] display load
 * [2] facebook api
 * [3] like action
 * [4]
 * [5]
 *
 */
$(function () {
    // [페이지 전환시 audio parse()]
    // if(audio.played) audio.pause();

    var post_data = window.location.search.substring(1);

    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (page) {
        // case 'display-intro.html':
        //     $.ajax({
        //         url: './data/categorys.json',
        //         type: 'GET',
        //         dataType: 'json',
        //         success: function (data) {
        //             audioSet(category.mp3Url);
        //             $('#titleData').html(category.title);
        //             $('#contentData').html(category.introduce);
        //         }
        //     });
        //     break;

        case 'display-list.html':
            // title setting & 전체 color 변경
            console.log('display-list.html case >>> title color 변경 필요')
            $.ajax({
                url: './data/items.json',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (post_data == undefined)
                        post_data = '1';

                    data[post_data].forEach(function (cat) {
                        // if (cat == category) {
                        listAdd(
                            post_data + '_' + cat.code,
                            cat.srcImg[0],
                            cat.title
                        );
                        // }
                    });
                }
            });
            break;
        case 'display-content.html':
            $.ajax({
                url: './data/items.json',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    var arr = post_data.split('_');
                    if (arr[0] == "")
                        var arr = ['1', '1'];
                    var cat = data[arr[0]];
                    cat.forEach(function (item) {
                        if (item.code == arr[1]) {
                            item.srcImg.forEach(function (imgUrl) {
                                imageSlideAdd(imgUrl);
                            });
                            // audioSet(item.mp3Url);
                            $('#item-title').html(item.subTitle);
                            $('#item-content').html(item.content);

                            var url = window.temp_domain + "likeCall";
                            $.post(url, {
                                itemCode : post_data,
                                deviceInfo : localStorage.getItem('user_id')
                            } ,function (data) {
                                if(data.status) {
                                    $('#like-status').val('true');
                                } else {
                                    $('#like-status').val('false');
                                }
                                // 1. css 효과 변경
                                if($('#like-status').val() == 'true') {
                                    $('#heart-icon').addClass('heart-btn');
                                    $('#heart-icon').removeClass('cus-color-black');

                                } else {
                                    $('#heart-icon').addClass('cus-color-black');
                                    $('#heart-icon').removeClass('heart-btn');
                                }
                            });
                        }
                    })
                }
            });
            likeBtnSet(post_data);
            break;
    }
});

// [2]


// [3] like btn
var likeBtnSet = function (post_data) {
   $('#like-btn').click(function () {
       // 1. css 효과 변경
       if($('#like-status').val() == 'true') {
           // like true
           $('#like-status').val('false');
           $('#heart-icon').addClass('cus-color-black');
           $('#heart-icon').removeClass('heart-btn');
       } else {
           // like false
           $('#like-status').val('true');
           $('#heart-icon').addClass('heart-btn');
           $('#heart-icon').removeClass('cus-color-black');
       }

       // 2. post like data
       var url = window.temp_domain + "likePlus";
       $.post(url, {
           itemCode : post_data,
           deviceInfo : localStorage.getItem('user_id'),
           likeStatus : $('#like-status').val()
       } ,function (data) {

       });
   })
};

/**
 *  function util
 *
 */


function audioSet(url) {
    audio = new Audio(url);
    $("#voicePlay").click(function () {
        if (audio.paused) audio.play();
        else audio.pause();
    });
}

function imageSlideAdd(imgUrl) {
    $('#item-slide').append(
        "<div class='swiper-slide'>" +
        "<img src=" + imgUrl + " alt=''>" +
        "</div>");
}


function listAdd(code, imgUrl, title) {
    $('#list_grid').append(
        "<div class='grid-item gallery-item-card'>" +
        "<a href=" + 'display-content.html?' + code + ">" +
        "<img src=" + imgUrl + ">" +
        "<div class='gallery-item-header'>" +
        "<div class='gallery-item-author'>" +
        "<div>" +
        title +
        "</div>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>"
    );
}

function patternAdd(user_id, date, img_url) {
    $('#result_contents').append(
        "<div class='blog-fullwidth animated fadeinup delay-1'>" +
        "<div class='blog-header'>" +
        "<div class='ml-m30'>" +
        "<div class='font-size-18'>" + user_id + "</div>" +
        "<div class='small'>" + date + "</div>" +
        "</div>" +
        "</div>" +
        "<div class='blog-image m-20'>" +
        "<img src=" + img_url + " alt=''>" +
        "<div class='opacity-overlay-top'></div>" +
        "</div>" +
        "</div>"
    );
}

function addNoticeList(title, content, date, delay){
    $('#noticeList').append(""+
        "<div class = 'single-news animated fadeinright delay-"+delay+"'>" +
        "<h4 class='single-news-title'>" +
        "<a href='#'>"+title+"</a>" +
        "</h4>" +
        "<span class='single-news-channel'>"+content+"<span class='single-news-category'>"+ date +"</span></span>"+
        "</div>"
    )
};

function myLikeAdd(code, title, subtitle, img_src, delay){
    $('#myLikeList').append(""+
        "<a href='display-content.html?"+code+"'>" +
        "<div class='blog-fullwidth animated fadeinup delay-"+delay+"'>" +
        "<div class='blog-header'>" +
        "<div class='ml-m30'>" +
        "<div class='font-size-18'>title</div>" +
        "<div class='small'>subtitle</div>" +
        "</div>" +
        "</div>" +
        "<div class='blog-image m-20'>" +
        "<img src='"+img_src+"' alt=''>" +
        "<div class='opacity-overlay-top'></div>" +
        "</div>" +
        "</div>" +
        "</a>")
};


function find() {
    var temp = $("#findForm").val();
    $("#findBox").html("");

    $.ajax({
        url: './data/items.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            for (var i = 1; i <= 5; i++) {

                var cat = "" + i + "";
                var arr = data[cat];
                arr.forEach(function (arr) {
                    if (arr.title.match(temp)) { //타이틀이 같아야해
                        var link = "./display-content.html?" + cat + "_" + arr.code;
                        $("#findBox").append("<a href='" + link + "'><li>" + arr.title + "</li></a>");
                    }
                });

            }
        }
    })
}

function getDateFormat(date) {
    // 년월일 얻기
    return date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate());
}

function addZero(num) {
    if (num < 10)
        return '0' + num;
    else
        return num;
}


