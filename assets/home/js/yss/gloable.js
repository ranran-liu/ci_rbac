layui.use(['jquery', 'layer', 'util'], function () {
    var $ = layui.jquery,
        layer = layui.layer,
        util = layui.util;
    util.fixbar();
    //导航控制
    master.start($);
});
var slider = 0;
var pathname = window.location.pathname.replace('Read', 'Article');
var master = {};
master.start = function ($) {
    $('#nav li').hover(function () {
        $(this).addClass('current');
    }, function () {
        var href = $(this).find('a').attr("href");
        if (pathname.indexOf(href) == -1) {
            $(this).removeClass('current');
        }
    });
    selectNav();
    function selectNav() {
        var navobjs = $("#nav a");
        $.each(navobjs, function () {
            var href = $(this).attr("href");
            if (pathname.indexOf(href) != -1) {
                $(this).parent().addClass('current');
            }
        });
    };

    $('.phone-menu').on('click', function () {
        $('#nav').toggle(500);
    });
    console.log(" 一个人到底多无聊");
    console.log(" 才会把 console 当成玩具");
    console.log(" 一个人究竟多堕落");
    console.log(" 才会把大好青春荒废在博客上");
    console.log("\n\n");
    console.log("follow me  %chttps://www.yanshisan.cn/", "color:#6bc30d");

    $(".blog-user img").hover(function () {
        var tips = layer.tips('点击退出', '.blog-user', {
            tips: [3, '#009688'],
        });
    }, function () {
        layer.closeAll('tips');
    })
};
