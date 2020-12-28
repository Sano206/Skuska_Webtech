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

var $menu = $("#menu");
$.each(data.menu, function () {
    $menu.append(
        getMenuItem(this)
    );
});
$menu.menu();