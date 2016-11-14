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
     * Play Part
     * [1] pattern summit
     * [2] result contents
     * [3] drawing
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
            "user_id": localStorage.getItem('user_id'),
            "name": name,
            "phone": phone,
            "address": address,
            "result": dataURL
        }
        $.post(url, {
            user_id: localStorage.getItem('user_id'),
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
    var post_num;
    $(function () {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page == 'paint-result.html') {
            post_num = 0;
            var url = window.temp_domain + "patternFind";
            $.post(url, {
                post_num: post_num
            }, function (datas) {
                datas.forEach(function (data, i) {
                    // console.log(data.imgURL)
                    var img_url = window.temp_domain + "public/repository/" + data.imgURL;

                    // post로 like 등록 했는지 확인

                    var url = window.temp_domain + "patternLikeCall";
                    $.post(url, {
                        imgURL: data.imgURL,
                        deviceInfo: localStorage.getItem('user_id')
                    }, function (likeData) {

                        var like_btn_id = window.ID();
                        var like_status_id = window.ID();
                        var icon_id = window.ID();

                        patternAdd(like_btn_id, icon_id, like_status_id, data.name, getDateFormat(new Date(data.date)), img_url, i);

                        if (likeData.status) {
                            $('#' + like_status_id).val('true');
                            $('#' + icon_id).addClass('heart-btn');
                            $('#' + icon_id).removeClass('cus-color-white');
                        } else {
                            $('#' + like_status_id).val('false');
                            $('#' + icon_id).addClass('cus-color-white');
                            $('#' + icon_id).removeClass('heart-btn');
                        }

                        $('#' + like_btn_id).click(function () {
                            if ($('#' + like_status_id).val() == 'true') {
                                $('#' + like_status_id).val('false');
                                $('#' + icon_id).addClass('cus-color-white');
                                $('#' + icon_id).removeClass('heart-btn');
                            } else {
                                $('#' + like_status_id).val('true');
                                $('#' + icon_id).addClass('heart-btn');
                                $('#' + icon_id).removeClass('cus-color-white');
                            }
                            var url = window.temp_domain + "patternLikePlus";
                            $.post(url, {
                                imgURL: data.imgURL,
                                likeStatus: $('#' + like_status_id).val(),
                                deviceInfo: localStorage.getItem('user_id')
                            }, function (data) {
                                console.log(data);
                            })
                        });
                    });
                }); // datas for문 종료 지점
                post_num += 1;
            });

            // 결과 버튼 클릭시에
            $('#pattern_result_add').click(function () {
                console.log(post_num)
                $.post(url, {
                    post_num: post_num
                }, function (datas) {
                    datas.forEach(function (data, i) {
                        var img_url = window.temp_domain + "public/repository/" + data.imgURL;

                        // post로 like 등록 했는지 확인

                        // app.post('/patternLikeCall', paint.likeCall);
                        // app.post('/patternLikePlus', paint.likePlus);
                        var url = window.temp_domain + "patternLikeCall";
                        $.post(url, {
                            imgURL: data.imgURL,
                            deviceInfo: localStorage.getItem('user_id')
                        }, function (likeData) {

                            var like_btn_id = window.ID();
                            var like_status_id = window.ID();
                            var icon_id = window.ID();

                            patternAdd(like_btn_id, icon_id, like_status_id, data.name, getDateFormat(new Date(data.date)), img_url, i);

                            if (likeData.status) {
                                $('#' + like_status_id).val('true');
                                $('#' + icon_id).addClass('heart-btn');
                                $('#' + icon_id).removeClass('cus-color-white');
                            } else {
                                $('#' + like_status_id).val('false');
                                $('#' + icon_id).addClass('cus-color-white');
                                $('#' + icon_id).removeClass('heart-btn');
                            }

                            $('#' + like_btn_id).click(function () {
                                if ($('#' + like_status_id).val() == 'true') {
                                    $('#' + like_status_id).val('false');
                                    $('#' + icon_id).addClass('cus-color-white');
                                    $('#' + icon_id).removeClass('heart-btn');
                                } else {
                                    $('#' + like_status_id).val('true');
                                    $('#' + icon_id).addClass('heart-btn');
                                    $('#' + icon_id).removeClass('cus-color-white');
                                }
                                var url = window.temp_domain + "patternLikePlus";
                                $.post(url, {
                                    imgURL: data.imgURL,
                                    likeStatus: $('#' + like_status_id).val(),
                                    deviceInfo: localStorage.getItem('user_id')
                                }, function (data) {
                                    console.log(data);
                                })
                            });
                        });

                    }); // datas for문 종료 지점
                    if (datas != null)
                        post_num += 1;
                });
            });
        }
    });

// [3]
    $(function () {
        var post_data = window.location.search.substring(1);

        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page == 'paint-draw.html') {

            reset();

            // default pen set
            pencilSelect();

            //patternImage setting
            outlineImage.onload = function () {
                redraw();
            };
            outlineImage.src = "./img/patterns/pattern_" + post_data + ".png";

            var canvas = document.getElementById('myCanvas')
            canvas.width = window.innerWidth * 9 / 10;
            canvas.height = window.innerWidth * 9 / 10;

            context = document.getElementById('myCanvas').getContext("2d");

            // Pen Start
            $('#myCanvas').on('touchstart', function (e) {
                var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
                    mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;
                $('#testText').text('1 mouseX_1 start : ' + mouseX + 'mouseX_2 start : ' + mouseY)
                paint = true;
                addClick(mouseX, mouseY);
                redraw();
            });
            // Pen Move
            $('#myCanvas').on('touchmove', function (e) {
                var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
                    mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;
                $('#testText').text('2 mouseX_1 start : ' + mouseX + 'mouseX_2 start : ' + mouseY)
                if (paint) {
                    addClick(mouseX, mouseY, true);
                    redraw();
                }
            });
            // Pen End
            $('#myCanvas').on('touchend', function (e) {
                console.log('in touchend');
                paint = false;
            });

            function addClick(x, y, dragging) {
                clickX.push(x);
                clickY.push(y);
                clickDrag.push(dragging);
            }

            function redraw() {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
                // context.strokeStyle = ink;
                //#df4b26
                context.lineJoin = "round";
                context.lineWidth = curSize;
                clickColor.push(ink);
                clickSize.push(curSize);

                for (var i = 0; i < clickX.length; i++) {
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
        }
    });

    /**
     * Panel Page [SET]
     * [1] index
     * [2] mylike
     * [3] graph - today
     * [4]
     * [5]
     * [6]
     */

    $(function () {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        switch (page) {
            case 'index.html':
                if (localStorage.getItem('user_id') == null) {
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
                console.log(window.temp_domain)
                var url = window.temp_domain + "getNotice";
                $.get(url, function (data) {
                    data.forEach(function (notice, i) {
                        var date_str = getDateFormat(new Date(notice.date))
                        var noticeStr = "";
                        noticeStr += addNoticeList(notice.title, notice.contents, date_str, i);

                        console.log(noticeStr)

                        $('#noticeList').append(noticeStr)
                    });
                });
                break;
            case 'side-myLike.html':
                var url = window.temp_domain + "myLike";
                $.post(url, {
                    deviceInfo: localStorage.getItem('user_id')
                }, function (myLikeItems) {
                    console.log('post ok');
                    console.log(myLikeItems);

                    $.ajax({
                        url: './data/items.json',
                        type: 'GET',
                        dataType: 'json',
                        success: function (items) {
                            myLikeItems.forEach(function (myLikeItem) {
                                var cat = myLikeItem.code.split('_')[0];
                                items[cat].forEach(function (item, i) {
                                    if (item.code == myLikeItem.code.split('_')[1]) {
                                        // 여기서 작업 item으로
                                        myLikeAdd(myLikeItem.code, item.title, item.subTitle, item.srcImg[0], i);
                                    }
                                });
                            });
                        }
                    });

                });
                break;
            case 'side-today.html':
                $('#today-refresh').click(function () {
                    window.location.href = 'side-today.html'
                })

                url = window.temp_domain + "todaySearch";
                $.get(url, function (datas) {
                    var today = new Date();
                    var todayString = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

                    var datasets = [{
                        label: "My First dataset",
                        fillColor: "rgba(180, 70, 70, 0.5)",
                        strokeColor: "rgba(180, 70, 70, 0.6)",
                        pointColor: "rgba(180, 70, 70, 0.9)",
                        pointStrokeColor: "rgba(180, 70, 70, 255, 0)",
                        pointHighlightFill: "rgba(180, 70, 70, 0.9)",
                        pointHighlightStroke: "rgba(180, 70, 70, 0)",
                        // data: [100, 0, 0, 0, 0]
                        data: [null, null, null, null, null]
                    }, {
                        label: "My Second dataset",
                        fillColor: "rgba(70, 180, 70, 0.5)",
                        strokeColor: "rgba(70, 180, 70, 0.6)",
                        pointColor: "rgba(70, 180, 70, 0.9)",
                        pointStrokeColor: "rgba(231, 76, 60, 255, 0)",
                        pointHighlightFill: "rgba(155, 89, 182, 0.9)",
                        pointHighlightStroke: "rgba(231, 76, 60, 0)",
                        // data: [0, 100, 0, 0, 0]
                        data: [null, null, null, null, null]
                    }, {
                        label: "My Thrid dataset",
                        fillColor: "rgba(100, 181, 246, 0.5)",
                        strokeColor: "rgba(41, 128, 185, 0.6)",
                        pointColor: "rgba(41, 128, 185, 0.9)",
                        pointStrokeColor: "rgba(41, 128, 185, 0)",
                        pointHighlightFill: "rgba(41, 128, 185, 0.9)",
                        pointHighlightStroke: "rgba(231, 76, 60, 0)",
                        // data: [0, 0, 100, 0, 0]
                        data: [null, null, null, null, null]
                    }, {
                        label: "My Fours dataset",
                        fillColor: "rgba(155, 89, 182, 0.5)",
                        strokeColor: "rgba(155, 89, 182, 0.6)",
                        pointColor: "rgba(155, 89, 182, 0.9)",
                        pointStrokeColor: "rgba(231, 76, 60, 255, 0)",
                        pointHighlightFill: "rgba(155, 89, 182, 0.9)",
                        pointHighlightStroke: "rgba(231, 76, 60, 0)",
                        // data: [0, 0, 0, 100, 0]
                        data: [null, null, null, null, null]
                    }]

                    datas.forEach(function (data) {
                        console.log(data.dateString)
                        console.log(todayString)
                        if (data.dateString == todayString) {
                            $('#today-count').html(new Intl.NumberFormat().format(data.count));
                        }

                        data.date = new Date(data.date);

                        switch (data.date.getMonth() + 1) {
                            case 11 :
                                datasets[0].data[getWeek(data.date.getDate())] += data.count;
                                break;
                            case 12 :
                                datasets[1].data[getWeek(data.date.getDate())] += data.count;
                                break;
                            case 2 :
                                datasets[2].data[getWeek(data.date.getDate())] += data.count;
                                break;
                            case 1 :
                                datasets[3].data[getWeek(data.date.getDate())] += data.count;
                                break;
                        }
                    });

                    // LINE GRAPH
                    var lineChartData = {
                        labels: ["1주", "2주", "3주", "4주", "5주"],
                        datasets: datasets
                    }
                    var ctx = document.getElementById("canvas").getContext("2d");
                    window.myLine = new Chart(ctx).Line(lineChartData, {
                        responsive: true,
                    });

                });
        }
    });


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
            case 'display-list.html':
                // title setting & 전체 color 변경
                // console.log('display-list.html case >>> title color 변경 필요');
                $.ajax({
                    url: './data/items.json',
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        if (post_data == undefined)
                            post_data = '1';
                        switch (post_data) {
                            case '1':
                                $('#sub-title').html('공무용 예복, 흑색 단령');
                                break;
                            case '2':
                                $('#sub-title').html('여성의 예복, 녹색 원삼');
                                break;
                            case '3':
                                $('#sub-title').html('유학자의 예복, 백색 심의');
                                break;
                            case '4':
                                $('#sub-title').html('의례용 예복, 홍색 조복');
                                break;
                            case '5':
                                $('#sub-title').html('남녀 덧옷, 배자');
                                break;
                        }
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
                var url = window.temp_domain + "itemViewCount";
                $.post(url, {
                    code : post_data
                }, function(view_count) {
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

                                    $('#sub-title').html(item.title);
                                    $('#view-count').html(view_count);

                                    item.srcImg.forEach(function (imgUrl) {
                                        imageSlideAdd(imgUrl);
                                    });

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

                                    // audioSet(item.mp3Url);
                                    $('#item-title').html(item.subTitle);
                                    $('#item-content').html(item.content);

                                    var url = window.temp_domain + "likeCall";
                                    $.post(url, {
                                        code: post_data,
                                        deviceInfo: localStorage.getItem('user_id')
                                    }, function (data) {
                                        // console.log(data.count)
                                        $('#like-count').html(data.count);
                                        if (data.status) {
                                            $('#like-status').val('true');
                                        } else {
                                            $('#like-status').val('false');
                                        }
                                        // 1. css 효과 변경
                                        if ($('#like-status').val() == 'true') {
                                            $('#heart-icon').addClass('heart-btn');
                                            $('#heart-icon').removeClass('cus-color-white');

                                        } else {
                                            $('#heart-icon').addClass('cus-color-white');
                                            $('#heart-icon').removeClass('heart-btn');
                                        }
                                    });
                                }
                            })
                        }
                    });
                });
                window.likeBtnSet(post_data);
                break;
        }
    });
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
 * Play Part
 * [1] pattern summit
 * [2] result contents
 * [3] drawing
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
        "user_id": localStorage.getItem('user_id'),
        "name": name,
        "phone": phone,
        "address": address,
        "result": dataURL
    }
    $.post(url, {
        user_id: localStorage.getItem('user_id'),
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
var post_num;
$(function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == 'paint-result.html') {
        post_num = 0;
        var url = window.temp_domain + "patternFind";
        $.post(url, {
            post_num: post_num
        }, function (datas) {
            datas.forEach(function (data, i) {
                // console.log(data.imgURL)
                var img_url = window.temp_domain + "public/repository/" + data.imgURL;

                // post로 like 등록 했는지 확인

                var url = window.temp_domain + "patternLikeCall";
                $.post(url, {
                    imgURL: data.imgURL,
                    deviceInfo: localStorage.getItem('user_id')
                }, function (likeData) {

                    var like_btn_id = window.ID();
                    var like_status_id = window.ID();
                    var icon_id = window.ID();

                    patternAdd(like_btn_id, icon_id, like_status_id, data.name, getDateFormat(new Date(data.date)), img_url, i);

                    if (likeData.status) {
                        $('#' + like_status_id).val('true');
                        $('#' + icon_id).addClass('heart-btn');
                        $('#' + icon_id).removeClass('cus-color-white');
                    } else {
                        $('#' + like_status_id).val('false');
                        $('#' + icon_id).addClass('cus-color-white');
                        $('#' + icon_id).removeClass('heart-btn');
                    }

                    $('#' + like_btn_id).click(function () {
                        if ($('#' + like_status_id).val() == 'true') {
                            $('#' + like_status_id).val('false');
                            $('#' + icon_id).addClass('cus-color-white');
                            $('#' + icon_id).removeClass('heart-btn');
                        } else {
                            $('#' + like_status_id).val('true');
                            $('#' + icon_id).addClass('heart-btn');
                            $('#' + icon_id).removeClass('cus-color-white');
                        }
                        var url = window.temp_domain + "patternLikePlus";
                        $.post(url, {
                            imgURL: data.imgURL,
                            likeStatus: $('#' + like_status_id).val(),
                            deviceInfo: localStorage.getItem('user_id')
                        }, function (data) {
                            console.log(data);
                        })
                    });
                });
            }); // datas for문 종료 지점
            post_num += 1;
        });

        // 결과 버튼 클릭시에
        $('#pattern_result_add').click(function () {
            console.log(post_num)
            $.post(url, {
                post_num: post_num
            }, function (datas) {
                datas.forEach(function (data, i) {
                    var img_url = window.temp_domain + "public/repository/" + data.imgURL;

                    // post로 like 등록 했는지 확인

                    // app.post('/patternLikeCall', paint.likeCall);
                    // app.post('/patternLikePlus', paint.likePlus);
                    var url = window.temp_domain + "patternLikeCall";
                    $.post(url, {
                        imgURL: data.imgURL,
                        deviceInfo: localStorage.getItem('user_id')
                    }, function (likeData) {

                        var like_btn_id = window.ID();
                        var like_status_id = window.ID();
                        var icon_id = window.ID();

                        patternAdd(like_btn_id, icon_id, like_status_id, data.name, getDateFormat(new Date(data.date)), img_url, i);

                        if (likeData.status) {
                            $('#' + like_status_id).val('true');
                            $('#' + icon_id).addClass('heart-btn');
                            $('#' + icon_id).removeClass('cus-color-white');
                        } else {
                            $('#' + like_status_id).val('false');
                            $('#' + icon_id).addClass('cus-color-white');
                            $('#' + icon_id).removeClass('heart-btn');
                        }

                        $('#' + like_btn_id).click(function () {
                            if ($('#' + like_status_id).val() == 'true') {
                                $('#' + like_status_id).val('false');
                                $('#' + icon_id).addClass('cus-color-white');
                                $('#' + icon_id).removeClass('heart-btn');
                            } else {
                                $('#' + like_status_id).val('true');
                                $('#' + icon_id).addClass('heart-btn');
                                $('#' + icon_id).removeClass('cus-color-white');
                            }
                            var url = window.temp_domain + "patternLikePlus";
                            $.post(url, {
                                imgURL: data.imgURL,
                                likeStatus: $('#' + like_status_id).val(),
                                deviceInfo: localStorage.getItem('user_id')
                            }, function (data) {
                                console.log(data);
                            })
                        });
                    });

                }); // datas for문 종료 지점
                if (datas != null)
                    post_num += 1;
            });
        });
    }
});

// [3]
$(function () {
    var post_data = window.location.search.substring(1);

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == 'paint-draw.html') {

        reset();

        // default pen set
        pencilSelect();

        //patternImage setting
        outlineImage.onload = function () {
            redraw();
        };
        outlineImage.src = "./img/patterns/pattern_" + post_data + ".png";

        var canvas = document.getElementById('myCanvas')
        canvas.width = window.innerWidth * 9 / 10;
        canvas.height = window.innerWidth * 9 / 10;

        context = document.getElementById('myCanvas').getContext("2d");

        // Pen Start
        $('#myCanvas').on('touchstart', function (e) {
            var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
                mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;
            $('#testText').text('1 mouseX_1 start : ' + mouseX + 'mouseX_2 start : ' + mouseY)
            paint = true;
            addClick(mouseX, mouseY);
            redraw();
        });
        // Pen Move
        $('#myCanvas').on('touchmove', function (e) {
            var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft,
                mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;
            $('#testText').text('2 mouseX_1 start : ' + mouseX + 'mouseX_2 start : ' + mouseY)
            if (paint) {
                addClick(mouseX, mouseY, true);
                redraw();
            }
        });
        // Pen End
        $('#myCanvas').on('touchend', function (e) {
            console.log('in touchend');
            paint = false;
        });

        function addClick(x, y, dragging) {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
        }

        function redraw() {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
            // context.strokeStyle = ink;
            //#df4b26
            context.lineJoin = "round";
            context.lineWidth = curSize;
            clickColor.push(ink);
            clickSize.push(curSize);

            for (var i = 0; i < clickX.length; i++) {
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
    }
});

/**
 * Panel Page [SET]
 * [1] index
 * [2] mylike
 * [3] graph - today
 * [4]
 * [5]
 * [6]
 */

$(function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (page) {
        case 'index.html':
            if (localStorage.getItem('user_id') == null) {
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
            console.log(window.temp_domain)
            var url = window.temp_domain + "getNotice";
            $.get(url, function (data) {
                data.forEach(function (notice, i) {
                    var date_str = getDateFormat(new Date(notice.date))
                    var noticeStr = "";
                    noticeStr += addNoticeList(notice.title, notice.contents, date_str, i);

                    console.log(noticeStr)

                    $('#noticeList').append(noticeStr)
                });
            });
            break;
        case 'side-myLike.html':
            var url = window.temp_domain + "myLike";
            $.post(url, {
                deviceInfo: localStorage.getItem('user_id')
            }, function (myLikeItems) {
                console.log('post ok');
                console.log(myLikeItems);

                $.ajax({
                    url: './data/items.json',
                    type: 'GET',
                    dataType: 'json',
                    success: function (items) {
                        myLikeItems.forEach(function (myLikeItem) {
                            var cat = myLikeItem.code.split('_')[0];
                            items[cat].forEach(function (item, i) {
                                if (item.code == myLikeItem.code.split('_')[1]) {
                                    // 여기서 작업 item으로
                                    myLikeAdd(myLikeItem.code, item.title, item.subTitle, item.srcImg[0], i);
                                }
                            });
                        });
                    }
                });

            });
            break;
        case 'side-today.html':
            $('#today-refresh').click(function () {
                window.location.href = 'side-today.html'
            })

            url = window.temp_domain + "todaySearch";
            $.get(url, function (datas) {
                var today = new Date();
                var todayString = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

                var datasets = [{
                    label: "My First dataset",
                    fillColor: "rgba(180, 70, 70, 0.5)",
                    strokeColor: "rgba(180, 70, 70, 0.6)",
                    pointColor: "rgba(180, 70, 70, 0.9)",
                    pointStrokeColor: "rgba(180, 70, 70, 255, 0)",
                    pointHighlightFill: "rgba(180, 70, 70, 0.9)",
                    pointHighlightStroke: "rgba(180, 70, 70, 0)",
                    // data: [100, 0, 0, 0, 0]
                    data: [null, null, null, null, null]
                }, {
                    label: "My Second dataset",
                    fillColor: "rgba(70, 180, 70, 0.5)",
                    strokeColor: "rgba(70, 180, 70, 0.6)",
                    pointColor: "rgba(70, 180, 70, 0.9)",
                    pointStrokeColor: "rgba(231, 76, 60, 255, 0)",
                    pointHighlightFill: "rgba(155, 89, 182, 0.9)",
                    pointHighlightStroke: "rgba(231, 76, 60, 0)",
                    // data: [0, 100, 0, 0, 0]
                    data: [null, null, null, null, null]
                }, {
                    label: "My Thrid dataset",
                    fillColor: "rgba(100, 181, 246, 0.5)",
                    strokeColor: "rgba(41, 128, 185, 0.6)",
                    pointColor: "rgba(41, 128, 185, 0.9)",
                    pointStrokeColor: "rgba(41, 128, 185, 0)",
                    pointHighlightFill: "rgba(41, 128, 185, 0.9)",
                    pointHighlightStroke: "rgba(231, 76, 60, 0)",
                    // data: [0, 0, 100, 0, 0]
                    data: [null, null, null, null, null]
                }, {
                    label: "My Fours dataset",
                    fillColor: "rgba(155, 89, 182, 0.5)",
                    strokeColor: "rgba(155, 89, 182, 0.6)",
                    pointColor: "rgba(155, 89, 182, 0.9)",
                    pointStrokeColor: "rgba(231, 76, 60, 255, 0)",
                    pointHighlightFill: "rgba(155, 89, 182, 0.9)",
                    pointHighlightStroke: "rgba(231, 76, 60, 0)",
                    // data: [0, 0, 0, 100, 0]
                    data: [null, null, null, null, null]
                }]

                datas.forEach(function (data) {
                    console.log(data.dateString)
                    console.log(todayString)
                    if (data.dateString == todayString) {
                        $('#today-count').html(new Intl.NumberFormat().format(data.count));
                    }

                    data.date = new Date(data.date);

                    switch (data.date.getMonth() + 1) {
                        case 11 :
                            datasets[0].data[getWeek(data.date.getDate())] += data.count;
                            break;
                        case 12 :
                            datasets[1].data[getWeek(data.date.getDate())] += data.count;
                            break;
                        case 2 :
                            datasets[2].data[getWeek(data.date.getDate())] += data.count;
                            break;
                        case 1 :
                            datasets[3].data[getWeek(data.date.getDate())] += data.count;
                            break;
                    }
                });

                // LINE GRAPH
                var lineChartData = {
                    labels: ["1주", "2주", "3주", "4주", "5주"],
                    datasets: datasets
                }
                var ctx = document.getElementById("canvas").getContext("2d");
                window.myLine = new Chart(ctx).Line(lineChartData, {
                    responsive: true,
                });

            });
    }
});


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
        case 'display-list.html':
            // title setting & 전체 color 변경
            // console.log('display-list.html case >>> title color 변경 필요');
            $.ajax({
                url: './data/items.json',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (post_data == undefined)
                        post_data = '1';
                    switch (post_data) {
                        case '1':
                            $('#sub-title').html('공무용 예복, 흑색 단령');
                            break;
                        case '2':
                            $('#sub-title').html('여성의 예복, 녹색 원삼');
                            break;
                        case '3':
                            $('#sub-title').html('유학자의 예복, 백색 심의');
                            break;
                        case '4':
                            $('#sub-title').html('의례용 예복, 홍색 조복');
                            break;
                        case '5':
                            $('#sub-title').html('남녀 덧옷, 배자');
                            break;
                    }
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
            var url = window.temp_domain + "itemViewCount";
            $.post(url, {
                code : post_data
            }, function(view_count) {
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

                                $('#sub-title').html(item.title);
                                $('#view-count').html(view_count);
                                
                                item.srcImg.forEach(function (imgUrl) {
                                    imageSlideAdd(imgUrl);
                                });

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

                                // audioSet(item.mp3Url);
                                $('#item-title').html(item.subTitle);
                                $('#item-content').html(item.content);

                                var url = window.temp_domain + "likeCall";
                                $.post(url, {
                                    code: post_data,
                                    deviceInfo: localStorage.getItem('user_id')
                                }, function (data) {
                                    // console.log(data.count)
                                    $('#like-count').html(data.count);
                                    if (data.status) {
                                        $('#like-status').val('true');
                                    } else {
                                        $('#like-status').val('false');
                                    }
                                    // 1. css 효과 변경
                                    if ($('#like-status').val() == 'true') {
                                        $('#heart-icon').addClass('heart-btn');
                                        $('#heart-icon').removeClass('cus-color-white');

                                    } else {
                                        $('#heart-icon').addClass('cus-color-white');
                                        $('#heart-icon').removeClass('heart-btn');
                                    }
                                });
                            }
                        })
                    }
                });
            });
            window.likeBtnSet(post_data);
            break;
    }
});

/**
 *  function util
 *
 */
var eraser = false,
    pencil = true,
    brush = false,
    outlineImage = new Image();

var clickSize = new Array(),
    clickColor = new Array(),
    curSize = 5;
clickColor.push("black");

var clickX = new Array(),
    clickY = new Array(),
    clickDrag = new Array();

var paint;
var ink = "black;"

function setColor(color) {
    if (eraser == true) {
        pencilSelect();
    }
    ink = color;
}
function setCurSize() {
    if (pencil == true) {
        curSize = $("#sizeSlider").val();
    } else if (eraser == true) {
        curSize = $("#sizeSlider").val() * 2;
    } else if (brush == true) {
        curSize = 20 + $("#sizeSlider").val() * 3;
    }
}
function eraserSelect() {
    setCurSize();
    setColor("white");
    eraser = true;
    pencil = false;
    brush = false;
    $("#eraser").addClass("tool-select")
    $("#pencil").removeClass("tool-select")
    $("#brush").removeClass("tool-select")
}
function pencilSelect() {
    eraser = false;
    pencil = true;
    brush = false;
    setCurSize();
    $("#eraser").removeClass("tool-select")
    $("#pencil").addClass("tool-select")
    $("#brush").removeClass("tool-select")
}
function brushSelect() {
    eraser = false;
    pencil = false;
    brush = true;
    setCurSize();
    $("#eraser").removeClass("tool-select")
    $("#pencil").removeClass("tool-select")
    $("#brush").addClass("tool-select")
}


var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};
var likeBtnSet = function (post_data) {
    $('#like-btn').click(function () {
        // 1. css 효과 변경
        if ($('#like-status').val() == 'true') {
            // like true
            $('#like-status').val('false');
            $('#heart-icon').addClass('cus-color-white');
            $('#heart-icon').removeClass('heart-btn');
        } else {
            // like false
            $('#like-status').val('true');
            $('#heart-icon').addClass('heart-btn');
            $('#heart-icon').removeClass('cus-color-white');
        }

        // 2. post like data
        var url = window.temp_domain + "likePlus";
        $.post(url, {
            code : post_data,
            deviceInfo: localStorage.getItem('user_id'),
            likeStatus: $('#like-status').val()
        }, function (data) {});
    })
};
function imageSlideAdd(imgUrl) {
    $('#item-slide').append(
        "<div class='swiper-slide'>" +
        "<img src=" + imgUrl + " alt=''>" +
        "</div>"
    );
}
function listAdd(code, imgUrl, title) {
    $('#list_grid').append(
        "<div class='grid-item gallery-item-card'>" +
        "<a href=" + 'display-content.html?' + code + ">" +
        "<img src=" + imgUrl + ">" +
        "<div class='gallery-item-header'>" +
        "<div class='gallery-item-author'>" +
        "<div class='overflow'>" +
        title +
        "</div>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>"
    );
}
function patternAdd(like_btn_id, icon_id, like_status_id, user_id, date, img_url, delay) {
    $('#result_contents').append(
        // "<div id='" + like_btn_id + "' class='blog-fullwidth animated fadeinup delay-" + delay + "'>" +
        "<div class='blog-fullwidth animated fadeinup delay-" + delay + "'>" +
        "<div style='padding: 20px 40px 0px 0px' class='width-100 pos-ab right-align'>" +
        "<button id='" + like_btn_id + "' class='btn-floating btn waves-effect waves-light cus-background-transparent z-index-middle'>" +
        // "<button class='btn-floating btn waves-effect waves-light cus-background-black'>" +
        "<input id='" + like_status_id + "' type='hidden' value='false'><!--안눌러져있는상태 default-->" +
        "<i id='" + icon_id + "'  class='ion-heart cus-color-transparent2'></i>" +
        "</button>" +
        "</div>" +
        "<div class='blog-header'>" +
        "<div class='ml-m30'>" +
        "<div class='font-size-18 black-text'>" + user_id + "</div>" +
        "<div class='small black-text'>" + date + "</div>" +
        "</div>" +
        "</div>" +
        "<div class='blog-image m-20'>" +
        "<img src=" + img_url + ">" +
        // "<div class='opacity-overlay-top'></div>" +
        "<div></div>" +
        "</div>" +
        "</div>"
    );
}
function addNoticeList(title, content, date, delay) {
    var returnStr = "<div class = 'single-news animated fadeinright delay-" + delay + "'>" +
        "<h4 class='single-news-title'>" +
        "<a href='#'>" + title + "</a>" +
        "</h4>" +
        "<span class='single-news-channel'>" + content + "<span class='single-news-category'>" + date + "</span></span>" +
        "</div>"
    return returnStr;
};
function myLikeAdd(code, title, subtitle, img_src, delay) {
    $('#myLikeList').append("" +
        "<a href='display-content.html?" + code + "'>" +
        "<div class='blog-fullwidth animated fadeinup delay-" + delay + "'>" +
        "<div class='blog-header'>" +
        "<div class='ml-m30'>" +
        "<div class='font-size-18'>" + title + "</div>" +
        "<div class='small'>" + subtitle + "</div>" +
        "</div>" +
        "</div>" +
        "<div class='blog-image m-20'>" +
        "<img src='" + img_src + "' alt=''>" +
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
                        $("#findBox").append("<a class = '' href='" + link + "'><li>" + arr.title + "</li></a>");
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
function reset() {
    clickX = [];
    clickY = [];
    clickDrag = [];
    clickColor = [];
    clickSize = [];
    console.log("reset");
}
var getWeek = function (date) {
    switch (true) {
        case date <= 7:
            return 0;
        case date <= 14:
            return 1;
        case date <= 21:
            return 2;
        case date <= 28:
            return 3;
        case date <= 31:
            return 4;
    }
}

