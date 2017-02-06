var sayHi = function () { console.log('HI!'); };
var Recept = (function () {
    function Recept(name, source, ingredients) {
        this.name = name;
        this.source = source;
        this.ingredients = ingredients;
    }
    return Recept;
}());
