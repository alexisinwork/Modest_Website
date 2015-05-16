$(document).ready(function(){
    var $background = $("#myCarousel");
    
    $(".icon").click(function () {
        $(".icon").removeClass("active-icon");
        $(this).addClass("active-icon");
        $icon = $(this).attr("id");
        $background.animate({opacity: 0}, 'slow', function() {
            $(this)
            .css("background-image","url('../images/background-slider" + $icon.replace(/icon/, '') + ".png')")
            .animate({opacity: 0.8},'slow'); 
        });
    });
    
    $(".thumbnail").hover(
    function(){
        $(this).css('opacity', '0.6');
        $(this).find(".icons-team").show();
        $(this).find(".caption").css('background-color','#000000');
        $(this).find(".caption p").css('color','#ffffff');
    }, function(){
        $(this).css('opacity', '1');
        $(this).find(".icons-team").hide();
        $(this).find(".caption").css('background-color','#e1e6ea');
        $(this).find(".caption p").css('color','#353b42');
    });
    
    $("#work .col-sm-4").hover(
    function(){
        $(this).find("img").css('opacity', '0.6'); 
        $(this).find(".plus").show();
        $(this).find(".text").show();
    }, function(){
        $(this).find("img").css('opacity', '1'); 
        $(this).find(".plus").hide();
        $(this).find(".text").hide()
    });
});