
let counter = 0;

$( function() {
    $( ".item" ).draggable({
        revert: "invalid",

    });
    for(i=1; i<9; i++){
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

    $("#button").click(function() {
        $("#sk1").animate({
            top: 121,
            left: 221,
        }, {
            duration: 1000,
        })
        $("#sk2").animate({
            top: 148,
            left: 403,
        }, {
            duration: 1000,
        })
        $("#sk3").animate({
            top: 230,
            left: 440,
        }, {
            duration: 1000,
        })
        $("#sk4").animate({
            top: 243,
            left: 235,
        }, {
            duration: 1000,
        })
        $("#sk5").animate({
            top: 285,
            left: 143,
        }, {
            duration: 1000,
        })
        $("#sk6").animate({
            top: 170,
            left: 98,
        }, {
            duration: 1000,
        })
        $("#sk7").animate({
            top: 255,
            left: 47,
        }, {
            duration: 1000,
        })
        $("#sk8").animate({
            top: 293,
            left: 33,
        }, {
            duration: 1000,
        })
    })

    $('#reset').click(function(){
        $("#sk1").removeAttr('style')
        $("#sk2").removeAttr('style')
        $("#sk3").removeAttr('style')
        $("#sk4").removeAttr('style')
        $("#sk5").removeAttr('style')
        $("#sk6").removeAttr('style')
        $("#sk7").removeAttr('style')
        $("#sk8").removeAttr('style')
    })



    function setDroppable(number){
        $( "#sk"+number+"e" ).droppable({
            accept: "#sk" + number,
            drop: function (event, ui) {
                console.log(++counter);
                if(counter === 8){
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







