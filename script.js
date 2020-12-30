
document.addEventListener("DOMContentLoaded", () => {
    let data;
    var $menu = $("#menu");



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


var getMenuItem = function (itemData) {
    var item = $("<li>")
        .append(
            $("<a>", {
                href: '#' + itemData.link,
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