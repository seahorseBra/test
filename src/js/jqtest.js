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
    var x;
    $("#btn").click(function () {
        var dd = $("p.cc");
        dd.animate({left: '300px', backgroundColor: 'red', width: '300px'}, 4000)
            .animate({'fontSize': '2em'}, 1000, function () {
                showend();
            });
    })

    $("#btn1").click(function () {
        $("p.cc").stop(true, false);
    })

    $("#btn3").click(function () {
        var dd = $("p");
        dd.toggleClass(function () {
            if ($(this).index() % 2 == 1) {
                return $(this).class;
            }
        });
    })
    $("#btn4").click(function () {
        var dd = $("img");
        alert(dd.offset().top + ":宽");
    })
    $("#btn5").click(function () {
        var dd = $("#changdiv");

        // dd.get("ajaxtest.txt");
        // 请求xml数据
        // dd.load("ajaxtest2.xml", function (response, status) {
        //     if(status == "success"){
        //         var ool = dd.html("<ol></ol>>");
        //         $(response).find("aa").each(function () {
        //             $("<li></li>").addClass("ee").html($(this).text()).appendTo("ol");
        //         })
        //     }
        //
        // });

        // 请求JSON数据
        // $.get({
        //     url: "ajaxtest3.js", dataType: "json", success: function (data, status, xhr) {
        //         if (status == "success") {
        //             var ool = dd.html("<ol></ol>");
        // $.get({url:"ajaxtest3.js", dataType:"json",success:function (data,status,xhr) {
        //         if(status == "success"){
        //             var ool = dd.html("<ol></ol>");
        //
        //             $.each(data, function (i, field) {
        //                 $("<li></li>").addClass("ee").html(field.name).add("<b>kauiweg</b>").appendTo("ol");
        //             })
        //         }
        // }})

        //         $.each(data, function (i, field) {
        //             $("<li></li>").addClass("ee").html(field.name).add("<b>kauiweg</b>").appendTo("ol");
        //         })
        //     }
        // }

        //使用ajax请求数据
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "ajaxtest.txt", false);
        xmlhttp.send();
        dd.html(xmlhttp.responseText)

    })

    $("#nav").click(function () {
        $("#nav_line1").toggleClass("nav_line1");
        $("#nav_line2").toggleClass("nav_line2");
        $("#nav_line3").toggleClass("nav_line3");

    })
})

function showend() {
    alert("awegaweg")
}


