$(document).ready(function(){

    //MAKE ARRAY OF 1~13
    var sun = [];
    for(i=1; i<13; i++){
        sun.push(i)
    }

    //CHANGE SUN ON CLICK
    var count = 0;
    var x;
    $(".clickSun").click(function(){
        if (count > 10){
            count = 0;
        }else {
            count++;
        }
        x = sun[count]
    // console.log(x);
    document.getElementById("sun").src=`img/sun/${x}.png`
    });

    // DRAG SUN
    $(".sun").draggable({
        stop: function(){
            $(this).animate({top:0, left:0}, 1000, 'easeOutElastic');
        }
    });

    var height;
    //SCROLL DOWN ON CLICK
    $(".clickArrow").click(function(){
        height = $(window).height();
        scrollTo(0, height);
    });

    //SCROLL UP ON CLICK
    $(".scrollUp").click(function(){
        scrollTo(0, 0);
    });

    // CHANGE BG ON SCROLL
    $(window).scroll(function() {
        if($(this).scrollTop()>100){
            $(".background").addClass("background2");
        } else{
            $(".background").removeClass("background2");
        }
    });

    // CHANGE MAIN IMAGE SIZE ON SCROLL
    $(window).scroll(function() {
        if($(this).scrollTop()>0){
            $(".mainImage").animate({"height":"60vh"}, "slow");
        } else{
            $(".mainImage").animate({"height":"calc(100vh - 100px)"}, "slow");
        }
    });

    //CLICK TO REVEAL MENU
    var clicks = 0;
    $("#menu").click(function(){
        clicks += 1;
        $(".openMenu").toggle("slow");
        if(clicks%2 == 1){
            $(".sun, .arrow, .profile").animate({"opacity":"0"}, "slow");
        } else {
            $(".sun, .arrow, .profile").animate({"opacity":"100"}, "slow");
        };
    });


    // ENLARGEN WORK CONTENT / SHOW TEXT ON HOVER
    $(".work1").children("#workItem1").hover(function (){
        $(this).toggleClass("workItem2");
        $("#workItem1 h4").toggle();
      });

    $(".work2").children().hover(function (){
        $(this).toggleClass("workItem2");
        $(this).children("h4").toggle();
        // $("#workItem3 h4").toggle();
      });

    // SLIDER SETUP
    var imgCount = $("#slider li").length;  
    var imgWidth = $("#slider li img").width(); 
    var sliderWidth = imgCount*imgWidth;   

    $("#slider ul").css({width : sliderWidth});    

    // SLIDER PREV / NEXT 
    $(".next").click(function (){
        var imgWidth = $("#slider li img").width();
        $("#slider ul").animate({"margin-left":-imgWidth}, 1000, "swing", function(){
            $("#slider ul").find("li:first-child").insertAfter($("#slider ul").find("li:last-child"));
            $("#slider ul").css({"margin":"0px"});
        });
    });

    $(".prev").click(function (){
        var imgWidth = $("#slider li img").width();
        $("#slider ul").find("li:last-child").insertBefore($("#slider ul").find("li:first-child"));
        $("#slider ul").css({"margin-left":-imgWidth});
        $("#slider ul").animate({"margin-left":'0px'}, 1000, "swing");
    });

    // SET SLIDER TO AUTO ON MOBILE
    if($(window).width() <= 768){
        setInterval(function(){
            var imgWidth = $("#slider li img").width();
            $("#slider ul").animate({"margin-left":-imgWidth}, 1000, "swing", function(){
                $("#slider ul").find("li:first-child").insertAfter($("#slider ul").find("li:last-child"));
                $("#slider ul").css({"margin":"0px"});
            });
        }, 4000);
    }else { console.log("stop") }

    // WORK JSON
    $.getJSON("work.json", function(work) {
        let html = '';
        $.each(work, function(i, piece) {
            html += 
                `<div class="grid-items">
                    <a href= ${piece.item} class="info-container">
                        <h5>${piece.name}</h5>
                        <p>${piece.caption}</p>
                    </a>
                    <div class="image-container">
                        <img src= ${piece.image}>
                    </div>
                </div>`
        });
        $(".work-grid").append(html);
    });

    // PASSION JSON
    $.getJSON("passion.json", function(passion) {
        let html = '';
        $.each(passion, function(i, piece) {
            html += 
                `<div class="grid-items">
                    <a href= ${piece.item} class="info-container">
                        <h5>${piece.name}</h5>
                        <p>${piece.caption}</p>
                    </a>
                    <div class="image-container">
                        <img src= ${piece.image}>
                    </div>
                </div>`
        });
        $(".passion-grid").append(html);
    });
});   


