// iniciar jquery

$(document).ready(function () {
    
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
        dataType: "json",
        success: function (pikachu) {
            $('.boton1').html(pikachu.abilities[1].ability.name);
        }
    });

});