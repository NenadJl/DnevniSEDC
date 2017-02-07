var ListOfIngredients = (function () {
    function ListOfIngredients(flour, milk, oil, salt, sugar, eggs, tomatoes, pepper, whiteCheese, yellowChesse) {
        if (salt === void 0) { salt = null; }
        if (sugar === void 0) { sugar = ''; }
        if (eggs === void 0) { eggs = ''; }
        if (tomatoes === void 0) { tomatoes = ''; }
        if (pepper === void 0) { pepper = ''; }
        this.whiteCheese = whiteCheese;
        this.yellowChesse = yellowChesse;
        this.flour = flour;
        this.milk = milk;
        this.oil = oil;
        this.salt = salt;
        this.sugar = sugar;
        this.eggs = eggs;
        this.tomatoes = tomatoes;
        this.pepper = pepper;
    }
    return ListOfIngredients;
}());
var Recept = (function () {
    function Recept(name, source, ingredientsList) {
        this.name = name;
        this.source = source;
        this.ingredientsList = ingredientsList;
    }
    return Recept;
}());
var listaNaSostojkiZaTorta = new ListOfIngredients("0.5 kg", "0.5 l", "0.3 l");
var receptZaTorta = new Recept("Svarcvald", "Austria", listaNaSostojkiZaTorta);
console.log(listaNaSostojkiZaTorta);
console.log(receptZaTorta);
console.log(JSON.stringify(receptZaTorta));
