$(document).ready(function(){
    $("h1").hover(
        function(){
            $('h1').addClass("title");
        },
        function(){
            $('h1').removeClass("title");
        }
    );
});