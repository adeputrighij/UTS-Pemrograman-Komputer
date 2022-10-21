$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });
    $('.login-form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });
   
    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass(popap);
    });

    $("#about").click(function(){
        $(".about .content .more p").toggle('btn');
        });
        $('#home').click(function(){
            $('.login-form').addClass('popup');
        });
        $('.home .btn').click(function(){
            $('.login-form').removeClass('popup');
        });
        $('#materi').click(function(){
            $('.login-form').addClass('popup');
        });
        $('.materi .container. card. imgBx').click(function(){
            $('.login-form').removeClass('popup');
        });
    
   



}); 