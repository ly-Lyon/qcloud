/**
 * Created by ly on 2017/4/21.
 */
$(document).ready(function(){
    $("#myCarousel").mouseover(function(){
        $("#left").css("display","inline-block");
        $("#right").css("display","inline-block");
    });
    $("#myCarousel").mouseout(function(){
        $("#left").css("display","none");
        $("#right").css("display","none");
    });

    $(".f3").mouseover(function(){
        $(this).find(".advertising-icon").css("margin-bottom","2px");
        $(this).find(" .title").css("color","#2277da");
    });
    $(".f3").mouseout(function(){
        $(this).find(".advertising-icon").css("margin-bottom","0");
        $(this).find(" .title").css("color","#000");
    });

    $(".col-md-1ths").mouseover(function(){
        $(this).addClass("ac-border").siblings().removeClass("ac-border");
        $(this).css("height","477px").css("width","34%").css("margin-top","-30px").siblings().css("height","400px").css("width","16%").css("margin-top","0px");
        $(this).find(".pt-detail").css("display","block");
        $(this).siblings().find(".pt-detail").css("display","none");
        $(this).find(".so-overview").css("display","none").siblings().find(".so-overview").css("display","block");
        $(this).siblings().find(".so-overview").css("display","block");
    });

    /*解决方案*/
    $(".solution-list li a").mouseover(function(){
        $(this).addClass("active-a").parent().siblings().find("a").removeClass("active-a");
        var c,d;
        c="."+$(this).attr("id");
        $(c).css("display","block").siblings(".solution-de").css("display","none");
        $(".bg-img").css({"background-image":"url(img/"+c+".jpg)"});
    });

});