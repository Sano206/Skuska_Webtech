
document.addEventListener("DOMContentLoaded", () => {
    let data;
    var $menu = $("#menu");

    let counterCookie = getCookie("counter")

    if(counterCookie){
        let counter = JSON.parse(counterCookie);
        counter++;
        $('#counter').text("Počet prístupov na stránku: " + counter);
        setCookie('counter',counter, 360)
    }else {
        $('#counter').text("Počet prístupov na stránku: " + 1);
        setCookie('counter',1, 360)
    }

    fetch("data.json")
        .then(response => response.json() )
        .then(json=>{
            data = json
            console.log(data)

            $.each(data.menu, function () {
                $menu.append(
                    getMenuItem(this)
                );
            });
            $menu.menu();

        })
        .catch((error)=>{
            console.log(error)
        })


})


function setCookie(cname, cvalue, exdays) { //w3schools cookies
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


var getMenuItem = function (itemData) {     //JQuery UI menu
    var item = $("<li>")
        .append(
            $("<a>", {
                href: itemData.link,
                html: itemData.name
            }));
    if (itemData.sub) {
        var subList = $("<ul>");
        $.each(itemData.sub, function () {
            subList.append(getMenuItem(this));
        });
        item.append(subList);
    }
    return item;
};