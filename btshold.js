$(document).ready(function () {
    $(window).scroll(function(evt){ 
        if ($(window).scrollTop()>0)
            $(".navbar").removeClass("navbar-top");
        else
        $(".navbar").addClass("navbar-top");
    });
});
// $(document).ready(function () {
//     $(window).scroll(function(evt){ 
//         if ($(window).scrollTop()>0)
//             $(".navbar").css("background","white");
//         });
// });
