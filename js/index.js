$(".ftr1").hover(function(){
    $(this).attr("src","./images/email1.png");
},function(){
    $(this).attr("src","./images/email.png");
})
$(".ftr2").hover(function(){
    $(this).attr("src","./images/facebook.png");
},function(){
    $(this).attr("src","./images/fac.png");
})
$(".ftr3").hover(function(){
    $(this).attr("src","./images/in1.png");
},function(){
    $(this).attr("src","./images/in.png");
})
$(".ftr4").hover(function(){
    $(this).attr("src","./images/slack1.png");
},function(){
    $(this).attr("src","./images/slack.png");
})
$(".ftr5").hover(function(){
    $(this).attr("src","./images/twitter1.png");
},function(){
    $(this).attr("src","./images/twitter.png");
})

$(window).scroll(function () {
    $(".nav-logo").attr("src","./images/object.png");
    $(".navbar-inverse").css({"background":"#fff","box-shadow":"0 4px 4px rgba(90, 90, 90, .1)"});
    var height =$(document).scrollTop();

    if(height<=200){
        $(".navbar-inverse").css({"background":"none","border-color":"none","box-shadow":"none"});
        $(".nav-logo").attr("src","./images/logo.png");
    }
})
$(".title-link img").hover(function(){
    $(this).attr("src","./images/hover.png");
},function(){
    $(this).attr("src","./images/normal.png");
})

