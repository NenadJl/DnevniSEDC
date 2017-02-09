let vneseniRecepti = [];

$(() => {
    let $ingridients = $('#ingredients');
    let $addNewIngridient = $('#addNewIngridient');

    let $ingridientsTwo = $('#ingredientsTwo');

    let $btnAddNewaddNewIngridientTwo = $('#addNewIngridientTwo');

    let $ddlSelectIng = $('#selectIngredientTwo');

    let $addRecipe = $('#newRecipe')
    let allIngridients = ['Brasno', 'Mleko', 'Sol', 'Seker', 'Jajca', 'Domati', 'Piperki', 'Sirenje', 'Kaskaval'];

    // od ovaa linija na dole stavame event liseneri

    $ddlSelectIng.on('click', ()=>{

    })

    $btnAddNewaddNewIngridientTwo.on('click', () => {
        
        allIngridients.forEach()

        $ingridientsTwo.append(
            `<li>${sostojka} i ${kolicina}</li>`
        )
    })

    $addNewIngridient.on('click', () => {

        let $select = $("<select class='ingridientName'>");
        let selectedIngridients = [];

        $('select').each((x, y) => {
            selectedIngridients.push($(y).val())
        })

        if (selectedIngridients.length < allIngridients.length)
            $select.appendTo($ingridients);

        allIngridients.forEach((s) => {

            let $option = $(`<option value='${s}'>`);
            $option.html(s);

            for (let i = 0; i < allIngridients.length; i++) {
                if (!~selectedIngridients.indexOf(s)) {
                    $option.appendTo($select);
                }
            }

        })


        // $ingridients.append(`
        //     <li>
        //         <select class="ingridientName">
        //             <option value="jajca">Jajca</option>
        //             <option value="mleko">Melko</option>
        //             <option value="brasno">Brasno</option>
        //         </select>
        //         <input type="text" class="ingridient">
        //     </li>
        // `)
    })

    $addRecipe.on('click', () => {

        let $lista = $('.ingridientName');
        let $kolicinaNaIzbranaSosotjka = $('.ingridient');

        let gramaBrasno = '';
        let litriMleko = '';
        let brojNaJajca = '';

        debugger;

        for (let i = 0; i < $lista.length; i++) {
            let odbranProdukt = $($lista[i]).val();


            switch (odbranProdukt) {
                case 'jajca':
                    brojNaJajca = $($kolicinaNaIzbranaSosotjka[i]).val();
                    break;
                case 'mleko':
                    litriMleko = $($kolicinaNaIzbranaSosotjka[i]).val();
                    break;
                case 'brasno':
                    gramaBrasno = $($kolicinaNaIzbranaSosotjka[i]).val();
                    break;
                default:
                    console.log('nesto si zaebal')
            }
        }

        let recept = new Recept($('#recipeName').val(),
            $('#recipeSource').val(),
            new ListOfIngredients(brojNaJajca, litriMleko, gramaBrasno, '34 grama'))

        $("#display").text(recept.ingredientsList.flour)

        vneseniRecepti.push(recept);

        localStorage.setItem('recept', JSON.stringify(vneseniRecepti));
        $ingridients.html("");

    })


})