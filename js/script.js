(function (global) {
    var dc = {};

    var categories = ["Lunch", "Dinner", "Sushi", "Desserts", "Drinks"];

    function getRandomCategory() {
        var randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    document.addEventListener("DOMContentLoaded", function () {
        var randomCategoryShortName = getRandomCategory();
        var specialsTile = document.getElementById("specials-link");
        
        // Atualize o 'href' dinamicamente com a categoria aleatória
        specialsTile.setAttribute("onclick", `$dc.loadMenuItems('${randomCategoryShortName}');`);
    });

    global.$dc = dc;
})(window);