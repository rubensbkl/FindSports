// Editar usuário
$('#editUser').submit(function(e) {
    e.preventDefault();
  
    $.ajax({
        url: `${serverURL}/user-edit`,
        type: 'PUT',
        data: JSON.stringify({
            id: sessionStorage.getItem('currentUserToken'),
            name: $("#name").val(),
            gender: $("#gender").val(),
            birthDate: $("#birthDate").val(),
            country: $("#country").val(),
            state: $("#state").val(),
            city: $("#city").val(),
            neighborhood: $("#neighborhood").val(),
            sports: $("#sports").val(),
            contact: {
                phone: $("#phone").val()
            },
        }),
        contentType: 'application/json',
        success: function(response) {
            console.log('User edited successfully:', response);
            // Animação (InfoSubmit) para os campos de input
            ["name", "gender", "birthDate", "country", "state", "city", "neighborhood", "sports", "phone"].forEach(id => {
                $("#" + id).addClass("infoSubmit");
            });
        },
        error: function(error) {
            console.error('Error editing user:', error);
        }
    });
});

// Animação (InfoSubmit) para os campos de input
["name", "birthDate", "gender", "country", "state", "city", "neighborhood", "sports", "phone"].forEach(id => {
    $("#" + id).on("focus", function() {
        $(this).removeClass("infoSubmit");
    });
});

// Máscara para o campo de telefone
$(document).ready(function(){
    $('#phone').mask('(00)00000-0000');
    $('#birthDate').mask('00/00/0000');
});



var choices = new Choices('#sports', {
    allowHTML: true,
    removeItemButton: false,
    searchEnabled: true,
    placeholder: true,
    placeholderValue: 'Cadastrar esportes',
    searchPlaceholderValue: 'Buscar esportes',
    itemSelectText: 'Selecionar',
    maxItemCount: 10,
    renderChoiceLimit: 10
});

var choices = new Choices('#gender', {
    allowHTML: true,
    removeItemButton: false,
    searchEnabled: false,
    placeholder: true,
    placeholderValue: 'Escolher',
    searchPlaceholderValue: 'Pesquisar',
    itemSelectText: 'Selecionar',
    maxItemCount: 10,
    renderChoiceLimit: 10
});