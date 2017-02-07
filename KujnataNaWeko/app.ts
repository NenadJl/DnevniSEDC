class ListOfIngredients {
    
    public flour: string;
    public milk: string;
    public oil: string;
    public salt: string;
    public sugar: string;

    constructor(flour: string, milk: string, oil: string, 
                salt: string = null, sugar: string = '', public eggs: string = '',
                public tomatoes: string = '', public pepper: string = '' , 
                public whiteCheese?: string, public yellowChesse?: string){
        
        this.flour = flour;
        this.milk = milk;
        this.oil = oil;
        this.salt = salt;
        this.sugar = sugar;
        this.eggs = eggs;
        this.tomatoes = tomatoes;
        this.pepper = pepper;
    }
}

class Recept {

    constructor(public name: string, public origin: string = 'Ne e navedeno poteklo', 
                public ingredientsList: ListOfIngredients) {

    }
}

let listaNaSostojkiZaTorta = new ListOfIngredients("0.5 kg", "0.5 l", "0.3 l");

let receptZaTorta = new Recept("Svarcvald", "Austria", listaNaSostojkiZaTorta);

console.log(listaNaSostojkiZaTorta);
console.log(receptZaTorta);

console.log(JSON.stringify(receptZaTorta));