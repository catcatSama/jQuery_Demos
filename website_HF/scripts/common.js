$(function(){
    $('.sub-navi').hide();
    $('.solutions').hover(function(){
        $('.sub-navi').slideDown(300)
    },function(){
        $('.sub-navi').hide()
    });
    
    var navLi = $(".nav>li");
    var navLine = $(".nav-line");
    var defLineW = $(".nav .active").width();
    var defLineLeft = $(".nav .active").position().left;
    navLine.css({left:defLineLeft, width:defLineW});
    navLi.hover(function(){
        var index = $(this).index();
        var curLineW = navLi.eq(index).width();
        var curLineLeft = $(this).position().left;
        navLine.stop().animate({
            left:curLineLeft,
            width:curLineW
        },200);
    },function(){
        navLine.stop().animate({
            left:defLineLeft,
            width:defLineW
        },200);
    })


})