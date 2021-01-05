
let counter = 0;

$( function() {
    $( ".original" ).draggable({
        revert: "invalid",

    });
    for(i=1; i<11; i++){
        setDroppable(i);
    }

    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var timer = setInterval(function () {
        seconds++;
        if(seconds === 60){
            minutes++;
            seconds = 0;
        }
        if(minutes === 60){
            hours++;
            minutes = 0;
        }
        document.getElementById('output').innerHTML = hours +' : '+minutes+' : '+seconds;
    }, 1000);




    function setDroppable(number){
        $( "#p"+number ).droppable({
            accept: "#o" + number,
            drop: function (event, ui) {
                console.log(++counter);
                if(counter === 10){
                    clearInterval(timer)
                    alert("Congratulations! Completed in "+ hours +' hours '+minutes+' minutes and '+seconds+ ' seconds')
                }
                $(this)
                    .addClass("piece");
                ui.draggable("disable")
            },
        })
    }
} );