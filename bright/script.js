//   $(".button").blur(function() {
//    alert("lost");
//   });

$('#toggle').click(function() {
    if ($(this).is(":checked")) {
        $(".sub").css("opacity.0");
        $(".thanks").css("opacity", 1);
    }
    else if ($(this).is(":not(:checked)"))
    {
        $(".sub").css("opacity", 1);
        $(".thanks").css("opacity", 0);
    }
})