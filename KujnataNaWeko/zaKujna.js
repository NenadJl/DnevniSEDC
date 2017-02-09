var ListaNaSostojki = (function () {
    function ListaNaSostojki(jajca, brasno, sol, seker, mleko, maslo, domati, piperki, sirenje, kaskaval) {
        if (jajca === void 0) { jajca = ''; }
        if (brasno === void 0) { brasno = ''; }
        if (sol === void 0) { sol = ''; }
        if (seker === void 0) { seker = ''; }
        if (mleko === void 0) { mleko = ''; }
        if (maslo === void 0) { maslo = ''; }
        if (domati === void 0) { domati = ''; }
        if (piperki === void 0) { piperki = ''; }
        if (sirenje === void 0) { sirenje = ''; }
        if (kaskaval === void 0) { kaskaval = ''; }
        this.jajca = jajca;
        this.brasno = brasno;
        this.sol = sol;
        this.seker = seker;
        this.mleko = mleko;
        this.maslo = maslo;
        this.domati = domati;
        this.piperki = piperki;
        this.sirenje = sirenje;
        this.kaskaval = kaskaval;
    }
    return ListaNaSostojki;
}());
var Recept = (function () {
    function Recept(ime, poteklo, listaNaSostojki) {
        this.name = ime;
        this.origin = poteklo;
        this.sostojki = listaNaSostojki;
    }
    return Recept;
}());
var novRec = new Recept('n', 'vtor', new ListaNaSostojki());
