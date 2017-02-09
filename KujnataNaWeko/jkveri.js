$(() => {

    let allIngridients = ['Brasno', 'Mleko', 'Sol', 'Seker', 'Jajca', 'Domati', 'Piperki', 'Sirenje', 'Kaskaval'];


    let $btnAddNewIngr = $("#newIngredient");
    let $inputIngredients = $("#ingredients");

    let $ddlSostojki = $("#opcii")

    // Od tuka nadolu stavame liseneri
    $btnAddNewIngr.on('click', () => {
        $inputIngredients.append(
            `<li>Filip</li>`
        )
    })

    $ddlSostojki.on('click', () => {
        $ddlSostojki.html('');
        allIngridients.forEach((sostojka, index) => {
            $ddlSostojki.append(
                `<option value='${sostojka.toLowerCase()}'>${sostojka}</option>`
            )
        })

    })
})