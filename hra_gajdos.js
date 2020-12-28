
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



/*droppable.on('drag:start', () => {
    document.querySelectorAll('.dropzone')
        .forEach(element =>
            element.setAttribute('class', "put-box puzzle-box start" ))
})

droppable.on('drag:stop', () => {
    document.querySelectorAll('.put-box')
        .forEach(element =>
            element.setAttribute('class', "put-box puzzle-box" ))
})

droppable.on('droppable:dropped', (e) => {
    e.data.dropzone.firstChild.setAttribute('hidden', true)
})*/



/*

var correctCards = 0;
$( init );

function init() {

    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    } );

    // Reset the game
    correctCards = 0;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );

    // Create the pile of shuffled cards
    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var terms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];
    <!--numbers.sort( function() { return Math.random() - .5 } );-->

    for ( var i=0; i<10; i++ ) {
        $('<div>' + terms[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {

            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        } );
    }

    // Create the card slots
    var words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
    for ( var i=1; i<=10; i++ ) {
        $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        } );
    }

}

function handleCardDrop( event, ui ) {
    var slotNumber = $(this).data( 'number' );
    var cardNumber = ui.draggable.data( 'number' );

    // If the card was dropped to the correct slot,
    // change the card colour, position it directly
    // on top of the slot, and prevent it being dragged
    // again

    if ( slotNumber == cardNumber ) {
        ui.draggable.addClass( 'correct' );
        ui.draggable.draggable( 'disable' );
        $(this).droppable( 'disable' );
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false );
        correctCards++;
    }

    // If all the cards have been placed correctly then display a message
    // and reset the cards for another go

    if ( correctCards == 10 ) {
        $('#successMessage').show();
        $('#successMessage').animate( {
            left: '380px',
            top: '200px',
            width: '400px',
            height: '100px',
            opacity: 1
        } );
    }

}

*/






