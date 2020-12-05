$(document).ready(function(){
    $("#hero-profile").hover(
        function(){
            $("h4.card-title").animate({fontSize: '40px'});
            $("h6.card-subtitle").animate({fontSize: '24px'});
        }, 
        function(){
            $("h4.card-title").animate({fontSize: '24px'});
            $("h6.card-subtitle").animate({fontSize: '16px'});
        }
    );
    var header = $("div.page-header");
    header.hover(
        function(){
            header.children("h1").animate({fontSize: '60px', opacity: '0.6'});
        }, 
        function(){
            header.children("h1").animate({fontSize: '40px', opacity: '1'});
        }
    );
});