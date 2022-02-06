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

    //CLICK TO REVEAL MENU
    $("#menu").click(function(){
        $(".openMenu").toggle("slow");
        $(".arrow").toggle("slow");
    })

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

    // $(".work3").children().hover(function (){
    //     $(this).toggleClass("workItem2");
    //   });
});   

