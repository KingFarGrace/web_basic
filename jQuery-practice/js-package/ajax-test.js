$(document).ready(function(){
    $("#btn1").click(function(){
        $.ajax({url:"../../txt/hello.txt",success:function(result){
            $("#div1").html(result);
        }});
    });
});