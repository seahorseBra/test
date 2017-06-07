/**
 * Created by zchao on 2017/6/7.
 */
$(document).ready(function () {
    // $("#btn").bind({
    //     click: function () {
    //         console.log("aewgawe");
    //         $("p.cc").slideToggle();
    //     },
    //     mouseover: function () {
    //         $("p.cc").css("background-color", "blue").css("color", "red");
    //     },
    //     mouseout: function () {
    //         $("p.cc").css("background-color", "white").css();
    //     }
    // })

    $("#btn").click(function () {
        var dd=$("p.cc");
        var st = dd[0].currentStyle;
        if(st == undefined){
            st = window.getComputedStyle(dd[0], null);
        }
        if(st == undefined){
            return;
        }

        if(st["opacity"] == 1){
            dd.fadeTo(2000, 0.3, ddd(dd, 1));
        }else {
            dd.fadeTo(2000, 1, ddd(dd, 2));
        }
    })

    function ddd(ele, a) {
        // if(a == 1){
        //     ele.slideUp("slow");
        // }else{
        //     ele.slideDown("slow");
        // }
        console.log("biabaiweg")
    }
})
