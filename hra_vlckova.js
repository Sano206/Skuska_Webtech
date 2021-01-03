/*PUZZLE*/
$(document).ready(function(){
    var rows = 3, columns = 3;
    var pieces = "";
    //loop with the image
    for(var i=0, top=0, order=0; i<rows; i++, top-=100){
        for(var j=0, left=0; j<columns;j++, left-=100, order++){
            pieces += "<div style='background-position:"
                + left + "px " + top + "px;' class='pieces' data-order" + order + "></div>";
        }
    }

    $("#puzzleContainer").html(pieces);
    $("#btnStart").click(function(){
        var pieces = $("#puzzleContainer div");
        pieces.each(function(){
            var leftPosition =
                Math.floor(Math.random()*190) + "px";
            var topPosition =
                Math.floor(Math.random()*190) + "px";
            $(this).addClass("draggablePiece").css({
                position: "absolute",
                left:leftPosition,
                top:topPosition
            })
            $("#pieceContainer").append($(this));
        });
        var emptyString = "";
        //loop without the image
        for(var i=0; i<rows; i++){
            for(var j=0; j<columns;j++){
                emptyString += "<div style='background-image: none;' class='pieces droppableSpace'></div>";
            }
        }
        $("#puzzleContainer").html(emptyString);
        $(this).hide();
        $("#btnReset").show();
        implementLogic()
    });

    function checkIfPuzzleSolved(){
        if($("#puzzleContainer .droppedPiece").length != 9){
            return false;
        }

            /*
            for(var k=0; k<9; k++)
            {
                var item = $("#puzzleContainer .droppedPiece:eq(" + k +  ")");
                var order = item.data("order");

                console.log(item.data());
                <!--ORDER nie je definovany-->
                if (k != order)
                {
                    $("#pieceContainer").text("Ouch! Try Again!");
                    return false;
                }
            }
            $("#pieceContainer").text("Wow! You are a GENIUS!");
            return true;
             */
        //ak by fungovalo to co je v komentari vyssie toto netreba
        else{
            $("#pieceContainer").text("The game is over!");
            window.clearInterval(interval);
            return true;
        }
    }

    function implementLogic(){
        $(".draggablePiece").draggable({
            revert:"invalid",
            start:function(){
                if($(this).hasClass("droppedPiece")){
                    $(this).removeClass("droppedPiece");
                    $(this).parent().removeClass("piecePresent")
                }
            }
        });
        $(".droppableSpace").droppable({
            hoverClass: "ui-state-highlight",
            accept: function(){
                return !$(this).hasClass("piecePresent")
            },
            drop:function (event, ui){
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent");
                $(draggableElement)
                    .addClass("droppedPiece")
                    .css({
                        top:0,
                        left:0,
                        position:"relative"
                    }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }
    $("#btnReset").click(function(){
        var rows = 3, columns = 3;
        var pieces = "";
        //loop with the image
        for(var i=0, top=0, order=0; i<rows; i++, top-=100){
            for(var j=0, left=0; j<columns;j++, left-=100, order++){
                pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='pieces' data-order" + order + "></div>";
            }
        }
        $("#puzzleContainer").html(pieces);

        var emptyString = "";
        $("#pieceContainer").html(emptyString);
        $(this).hide();
        $("#btnStart").show();
    });
});

/*DEMO*/
function openModal(){
    document.getElementsByClassName('fade')[0].style.display="flex";
    $( ".pic1" ).animate({
        left: "-=-324",
        top: "-=68"
    },4500);

    $( ".pic2" ).animate({
        left: "-=-414",
        top: "-=108"
    },4500);

    $( ".pic3" ).animate({
        left: "-=-494",
        top: "-=148"
    },4500);

    $( ".pic4" ).animate({
        left: "-=-244",
        top: "-=59"
    },4500);

    $( ".pic5" ).animate({
        left: "-=-374",
        top: "-=58"
    },4500);

    $( ".pic6" ).animate({
        left: "-=-384",
        top: "-=28"
    },4500);

    $( ".pic7" ).animate({
        left: "-=-264",
        top: "-=-42"
    },4500);

    $( ".pic8" ).animate({
        left: "-=-304",
        top: "-=-112"
    },4500);

    $( ".pic9" ).animate({
        left: "-=-364",
        top: "-=-101.5"
    },4500);
}

function closeModal(){
    document.getElementsByClassName('fade')[0].style.display="none";
    $( ".pic1" ).animate({
        left: "-=324",
        top: "-=-68"
    });

    $( ".pic2" ).animate({
        left: "-=414",
        top: "-=-108"
    });

    $( ".pic3" ).animate({
        left: "-=494",
        top: "-=-148"
    });

    $( ".pic4" ).animate({
        left: "-=244",
        top: "-=-59"
    });

    $( ".pic5" ).animate({
        left: "-=374",
        top: "-=-58"
    });

    $( ".pic6" ).animate({
        left: "-=384",
        top: "-=-28"
    });

    $( ".pic7" ).animate({
        left: "-=264",
        top: "-=42"
    });

    $( ".pic8" ).animate({
        left: "-=304",
        top: "-=112"
    });

    $( ".pic9" ).animate({
        left: "-=364",
        top: "-=101.5"
    });
}

/*https://github.com/JamieMcGibbon/TechnicalCafe/blob/master/Misc%20Tutorials/Stopwatch%20Tutorial/styles.css*/
/*WATCH*/
//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

function startStop(){
    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

//Function to reset the stopwatch
function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}
