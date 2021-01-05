let counter = 0;
let cas = 0;

function time(){
    setTimeout(function(){
        document.getElementById('timer').innerHTML = 'Čas: ' + cas + 's';
        cas = cas + 1;
        time();
    }, 1000);
}

$( function() {
    $( ".original" ).draggable({
        revert: "invalid",

    });
    for(i=1; i<11; i++){
        setDroppable(i);
    }



    function setDroppable(number){
        $( "#p"+number ).droppable({
            accept: "#o" + number,
            drop: function (event, ui) {
                console.log(++counter);
                if(counter === 10){
                    counter = 0;
                    document.getElementById("timer").style.display='none';
                    document.getElementById('alert').innerHTML = 'Čas: ' + cas + 's';
                    document.getElementById('alert').style.display='block';
                    cas = 0;

                }
                $(this)

                ui.draggable("disable")
            },
        })
    }
} );

$(document).ready(function() {
    time();
});

$('#reset').click(function (){
    location.reload();
})
