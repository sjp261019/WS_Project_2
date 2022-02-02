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
});