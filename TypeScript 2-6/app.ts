let sayHio = () => { console.log('HI!') }




interface IIngredients {
    jajca?: number;
    brasno: number;
    mleko: number;
    kiselomleko: number;
}

class Recept {

    constructor(public name: string, public source: string, public ingredients: IIngredients) {

    }
}