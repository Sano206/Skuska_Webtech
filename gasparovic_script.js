$(function (){
    $(".piece_1, .piece_2, .piece_3, .piece_4, .piece_5, .piece_6, .piece_7, .piece_8, .piece_9, .piece_10").draggable({
        containment: 'parent',
        revert: true
    });


    var seconds = 0, minutes = 0, hours = 0, timer = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        document.getElementById('output').innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
    }, 1000);


});

$('#outline').droppable({
    accept:'#pokemon_head_1'
});