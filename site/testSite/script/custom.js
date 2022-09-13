// 첫번째 유형
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});
var currentIndex = 0;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++
    }else{
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-378)+"px";

    $(".slideList").animate({top:slidePosition},400);
},3000)

// 탭메뉴
var tabMenu = $(".notice");

tabMenu.find("ul > li> ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault();
    var target = $(this);
    target.next().show().patent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};

tabMenu.find("ul > li > a").click(tabList);

// 팝업
$(".ad").click(function(){
    $(".layer_bg").css("display","block");
});
$(".ad .close").click(function(){
    $(".layer_bg").css("display","none");
});