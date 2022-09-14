$(document).ready(function () {

    //탭메뉴
    $(".tabsArea .tab_content").hide();
    $(".tabsArea .tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    // 검색어 자동완성    
    $(".globalStock #header .searchArea .AutoComplete li a").on("click", function () {
        $(this).addClass('_on');
    });
    $(".globalStock #header .searchArea .AutoComplete li a").on("mouseleave", function () {
        $(".globalStock #header .searchArea .AutoComplete li a").removeClass("_on");
    });
    $(".globalStock #header .searchArea .AutoComplete li a").on("mouseover", function () {
        $(this).addClass('_on');
    });
    $(".globalStock #header .searchArea .searchInput").on("keydown", function () {
        $('.globalStock #header .searchArea .AutoComplete').addClass('_show');
    });
    $(".globalStock #header .searchArea .searchInput").on("focusout", function () {
        $('.globalStock #header .searchArea .AutoComplete').removeClass('_show');
    });

    $(".globalStock .searchFixed .AutoComplete li a").on("click", function () {
        $(this).addClass('_on');
    });
    $(".globalStock .searchFixed .AutoComplete li a").on("mouseleave", function () {
        $(".globalStock .searchFixed .AutoComplete li a").removeClass("_on");
    });
    $(".globalStock .searchFixed .AutoComplete li a").on("mouseover", function () {
        $(this).addClass('_on');
    });
    $(".globalStock .searchFixed .searchInput_fixed").on("keydown", function () {
        $('.globalStock .searchFixed .AutoComplete').addClass('_show');
    });
    $(".globalStock .searchFixed .searchInput_fixed").on("focusout", function () {
        $('.globalStock .searchFixed .AutoComplete').removeClass('_show');
    });
    //검색어 키보드

    //table
    $(window).scroll(function () {
        if ($('.tableColtype').hasClass("typeScroll")) {
            var trFixedTop = $('.typeScroll tr.fix_tr').filter(':visible').offset();
            var positionTable = $('.typeScroll tr.fix_tr').filter(':visible').offset().top;
            var position = $(window).scrollTop() - positionTable - 1;
            if ($(document).scrollTop() > trFixedTop.top + 1) {
                $('.tableColtype').filter(':visible').each(function () {
                    $(this).children().children('tr').addClass('trFixed');
                    $(this).children().children().children('th').css('top', position);
                    $('.tableColtype th').css('border-bottom', '2px solid #fff');
                });
            } else {
                $('.typeScroll tr.fix_tr').removeClass('trFixed');
                $('.tableColtype th').css('border-bottom', '2px solid #555');
            }
        }
    });

    function tableLength() {
        if ($('.tableColtype').hasClass("typeScroll")) {
            var thLength = $('.globalStock #container .tableData .tableScroll .typeScroll th').length;
            if (thLength <= 7) {
                //투자지표
                var thWidth = ((($('.globalStock #container .tableData .tableScroll').width()) / thLength) + (195 / (thLength - 1)));
                $('.globalStock #container .tableData .tableScroll .typeScroll th, .globalStock #container .tableData .tableScroll .typeScroll th span').css({
                    'width': thWidth
                });
                $('.globalStock #container .tableData .tableScroll .typeScroll tr:first th:first, .globalStock #container .tableData .tableScroll .typeScroll tr:first th:first span').css({
                    'width': 195
                });
                //재무제표
                var thWidth2 = ((($('.globalStock #container .tableData .tableScroll').width()) / thLength) + (134 / (thLength - 1)));
                console.log(thWidth2);
                $('.globalStock #container .tableData .tableScroll .typeScroll.tableBill tr th, .globalStock #container .tableData .tableScroll .typeScroll.tableBill tr th span').css({
                    'width': thWidth2
                });
                $('.globalStock #container .tableData .tableScroll .typeScroll.tableBill tr:first th:first, .globalStock #container .tableData .tableScroll .typeScroll.tableBill tr:first th:first span').css({
                    'width': 134
                });
            }
        }
    }
    tableLength();

    $('.bannerRight table.sumtable .fntfmly_num th:nth-child(3)').addClass('bdrRightW');
    $('.bannerRight table.sumtable td:nth-child(1)').addClass('bdrRightW');

    //table 뎁스 디자인
    var tableTrLineChk = $('.globalStock #container .tableData .tableScroll .typeScroll tr.depth01').next('tr');
    $('.globalStock #container .tableData .tableScroll .typeScroll tr.depth01').each(function () {
        if (!$(this).next().hasClass("depth02")) {
            $(this).addClass('lineSolo');
        }
    });
    $('.globalStock #container .tableData .tableScroll .typeScroll.tableBill tr.depth01').each(function () {
        if ($(this).next().hasClass('depth02')) {
            $(this).addClass('lastD01');
        }
    });
    $('.globalStock #container .tableData .tableScroll .typeScroll.tableBill tr.depth02').each(function () {
        if ($(this).next().hasClass('depth01')) {
            $(this).addClass('lastD02');
        }
    });
    $('.globalStock #container .tableData .tableScroll .typeScroll.tableReports tr.depth03').each(function () {
        if ($(this).next().hasClass('depth02')) {
            $(this).addClass('last03');
        } else if ($(this).next().hasClass('depth01')) {
            $(this).addClass('last03');
        }
    });

    //summary 정보 없는 경우
    $('.globalStock #container .summary .etc li').each(function () {
        // console.log( $(this).text().length );
        if ($(this).text().length <= 3) {
            $(this).hide();
        }
    });

    var txtPsize = $('.globalStock #container .summary p').height();
    $(".globalStock #container .summary .close").on("click", function () {
        if ($(this).hasClass("show")) {
            $(this).removeClass('show').addClass('small');

        } else {
            $(this).addClass('show');
            $('.globalStock #container .summary p').removeClass('small');
        }

        if ($(".globalStock #container .summary").hasClass("small")) {
            $(".globalStock #container .summary").removeClass('small');
        } else {
            $(".globalStock #container .summary").addClass('small');
        }
    });


    $(".globalStock #container .tableData .tableTab span").on("click", function () {
        addClassLine();
    });

    function addClassLine() {
        $('.globalStock tr.depth02 td, .globalStock tr.depth03 td').each(function () {
            var spanHeight = $(this).children('span').height();
            if (spanHeight >= 18) {
                $(this).addClass('line2');
            }
        });
    }
    addClassLine();

    // 탭메뉴
    $("ul.tabs li").on("click", function () {
        // if ($(this).index() !== 3 && $(this).index() !== 4  && $(this).index() !== 8 ) {
        $("ul.tabs li").removeClass("active");
        $(this).addClass('active active_fix');
        // }
    });
    $("ul.tabs li").on("mouseleave", function () {
        // $(this).addClass('active active_fix');
    });
    $("ul.tabs li").on("mouseover", function () {
        $("ul.tabs li").removeClass("active_fix");
    });

    // fixed 검색어 자동
    $(function () {
        var top_search_action = false;
        var lis = [];
        $(".globalStock .searchFixed .searchInput_fixed").on("keyup", function (e) {
            var key = e.keyCode;
            switch (key) {
                case 13:
                    e.preventDefault();
                    moveToSearch($('.globalStock .searchFixed .AutoComplete'));
                    break;

                case 9:
                case 16:
                case 37:
                case 38:
                case 39:
                case 40:
                case 27:
                    break;

                default:
                    var search_input = this;
                    if (top_search_action) { clearTimeout(top_search_action); }
                    top_search_action = setTimeout(function () {
                        doSearch(search_input);
                    }, 400);
            }
        });

        function doSearch(obj) {

            var div = $('.globalStock .searchFixed .AutoComplete');

            for (var i in lis) {
                $('a._on', lis[i]).removeClass('_on');
            }
            lis = [];
            div.removeClass('_show');
            if (obj.value.length <= 0) {
                return;
            }

            var search = obj.value.toUpperCase();
            var ul = $('ul:first', div);
            ul.html('');
            var match_li = null;
            var find_lis = [];
            for (var tic in search_ticker_list) {
                var ticker = tic.toUpperCase();
                if (ticker == search) {
                    // ticker 일치
                    match_li = $('<li><a href="/wm_stocks/summary/' + tic + '"><span class="schCode">' + tic + '</span><span class="schList">' + search_ticker_list[tic].name + '</span></a></li>');
                    continue;
                }
                if ((ticker + search_ticker_list[tic].name).toUpperCase().indexOf(search) >= 0) {
                    find_lis.push($('<li><a href="/wm_stocks/summary/' + tic + '"><span class="schCode">' + tic + '</span><span class="schList">' + search_ticker_list[tic].name + '</span></a></li>'));
                }
            }
            if (match_li !== null) {
                ul.append(match_li);
            }
            if (find_lis.length > 0) {
                ul.append(find_lis);
            }
            if (find_lis.length > 0 || match_li !== null) {
                $('li:first a', ul).addClass('_on');
                $('li a', ul).on('mouseover', function () {
                    $(this).addClass("_on");
                });
                $('li a', ul).on('mouseleave', function () {
                    $(this).removeClass("_on");
                });
                $('li a', ul).on('mousedown', function () {
                    location.href = this.href;
                });

                div.addClass('_show');
            }
        }


        $(".globalStock .searchFixed .searchInput_fixed").on("focusin", function () {
            if (this.value.length) {
                if (top_search_action) { clearTimeout(top_search_action); }
                var search_input = this;
                top_search_action = setTimeout(function () {
                    doSearch(search_input);
                }, 300);
            }
        });
        $(".globalStock .searchFixed .searchInput_fixed").on("focusout", function () {
            setTimeout(function () { $('.globalStock .searchFixed .AutoComplete').removeClass('_show'); }, 100);
        });
        $(".globalStock .searchFixed .AutoComplete li a").on("mouseleave", function () {
            $(".globalStock .searchFixed .AutoComplete li a").removeClass("_on");
        });
        $(".globalStock .searchFixed .AutoComplete li a").on("mouseover", function () {
            $(this).addClass('_on');
        });

        //placeholder 
        $('.globalStock #header .searchArea .searchInput').on("focus", function () {
            $(this).css('background-image', 'none');
        });
    });

    (function (window) {

        'use strict';

        // class helper functions from bonzo https://github.com/ded/bonzo

        function classReg(className) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        // classList support for class management
        // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ('classList' in document.documentElement) {
            hasClass = function (elem, c) {
                return elem.classList.contains(c);
            };
            addClass = function (elem, c) {
                elem.classList.add(c);
            };
            removeClass = function (elem, c) {
                elem.classList.remove(c);
            };
        }
        else {
            hasClass = function (elem, c) {
                return classReg(c).test(elem.className);
            };
            addClass = function (elem, c) {
                if (!hasClass(elem, c)) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function (elem, c) {
                elem.className = elem.className.replace(classReg(c), ' ');
            };
        }

        function toggleClass(elem, c) {
            var fn = hasClass(elem, c) ? removeClass : addClass;
            fn(elem, c);
        }

        var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

        // transport
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(classie);
        } else {
            // browser global
            window.classie = classie;
        }

    })(window);

    var ModalEffects = (function () {

        function init() {

            var overlay = document.querySelector('.md-overlay');

            [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {

                var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                    close = modal.querySelector('.md-close');

                function removeModal(hasPerspective) {
                    classie.remove(modal, 'md-show');

                    if (hasPerspective) {
                        classie.remove(document.documentElement, 'md-perspective');
                    }
                }

                function removeModalHandler() {
                    removeModal(classie.has(el, 'md-setperspective'));
                }

                el.addEventListener('click', function (ev) {
                    classie.add(modal, 'md-show');
                    overlay.removeEventListener('click', removeModalHandler);
                    overlay.addEventListener('click', removeModalHandler);

                    if (classie.has(el, 'md-setperspective')) {
                        setTimeout(function () {
                            classie.add(document.documentElement, 'md-perspective');
                        }, 25);
                    }
                });

                // close.addEventListener('click', function (ev) {
                //     ev.stopPropagation();
                //     removeModalHandler();
                // });

            });
        }
        init();
    })();

    $('.pop_header .close, .md-overlay').on("click", function () {
        $('.globalStock .md-modal').removeClass('md-show');
        $('html, body').css("overflow", "scroll");
    });

});

