$(() => {

    let allIngridients = ['Brasno', 'Mleko', 'Sol', 'Seker', 'Jajca', 'Domati', 'Piperki', 'Sirenje', 'Kaskaval'];


    let $btnAddNewIngr = $("#newIngredient");
    let $inputIngredients = $("#ingredients");

    let $ddlSostojki = $("#opcii");
    let $inputKolicina = $("#qty");

    let count = 0;

    allIngridients.forEach((sostojka, index) => {
        $ddlSostojki.append(
            `<option value='${sostojka.toLowerCase()}'>${sostojka}</option>`
        )
    })




    // Od tuka nadolu stavame liseneri
    $btnAddNewIngr.on('click', () => {
        count++;
        $inputIngredients.append(
            `<li><span>${$ddlSostojki.val()}</span>, kolicina ${$inputKolicina.val()}</li>`
        )

        $ddlSostojki.html('');
        $inputKolicina.html('');

        allIngridients.forEach((sostojka, index) => {
            debugger;
            if (!~($('li span').text()).indexOf(sostojka.toLowerCase())) {
                $ddlSostojki.append(
                    `<option value='${sostojka.toLowerCase()}'>${sostojka}</option>`
                )
            }
        })

        if (count === allIngridients.length) {
            $ddlSostojki.hide();
            $inputKolicina.hide();
            $btnAddNewIngr.hide();
        }
    })

    // $ddlSostojki.on('click', () => {
    //     $ddlSostojki.html('');

    //     allIngridients.forEach((sostojka, index) => {
    //         $ddlSostojki.append(
    //             `<option value='${sostojka.toLowerCase()}'>${sostojka}</option>`
    //         )
    //     })

    // })
})