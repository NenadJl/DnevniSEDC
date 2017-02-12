class ListaNaSostojki {
    constructor(public jajca: string ='',
                public brasno: string ='',
                public sol: string = '',
                public seker: string = '',
                public mleko: string = '',
                public maslo: string = '',
                public domati: string = '',
                public piperki: string = '',
                public sirenje: string = '',
                public kaskaval: string = ''){
    }
}

class Recept {
    public name: string; 
    public origin: string;
    public sostojki: ListaNaSostojki;

    constructor(ime: string, 
                poteklo: string, 
                listaNaSostojki: ListaNaSostojki){
        this.name = ime;
        this.origin = poteklo;
        this.sostojki = listaNaSostojki;
    } 
}
let novRec = new Recept('n','vtor', 
                        new ListaNaSostojki())

