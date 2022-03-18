// let p = document.getElementsByTagName('p');
// let btn = document.getElementById('btn');

// btn.onclick = function () {
//     for (let i = 0; i < p.length; i++) {
//         p[i].style.display = 'none';
//     }
// }



$(document).ready(function(){ 
    //  $('p').hide();
    //$('#uno').hide();
    // $('p.altro').hide();

    // $('[alt="ciao aaa"]').hide();

    // evento in js classico
    //btn.onclick = function () {}

    // evento in jquery
    $('#btn').click(function() {
        $('p').hide();
    });

    $('#btn2').click(function() {
        $('p').show();
    });

    $('#btn3').click(function() {
        $('p').toggle();
    });

    // fadeIn, fadeOut, fadeToggle
    $('#btn4').click(function() {
        $('p').fadeIn();
    });

    $('#btn5').click(function() {
        $('p').fadeOut();
    });

    $('#btn6').click(function() {
        $('p').fadeToggle();
    });


    // provare anche slideIn e slideOut
    $('h1').click(function() {
        $('#mioPar').slideToggle(2000, 'linear');
    });

});






