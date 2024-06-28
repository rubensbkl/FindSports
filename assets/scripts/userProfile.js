$(document).ready(function() {
    // Obtenha o ID do usuário da URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    $.ajax({
        url: `${serverURL}/user-profile/${id}`,
        type: 'GET',
        success: function(user) {
            $('#name').text(user.name);
            $('#username').text('@' + user.username);
            $('#country').text('País: ' + user.country);
            $('#state').text('Estado: ' + user.state);
            $('#city').text('Cidade: ' + user.city);
            $('#neighborhood').text('Bairro: ' + user.neighborhood);
            $('#birthDate').text('Idade: ' + user.birthDate);
            $('#gender').text('Sexo: ' + user.gender);
            $('#likes').text(user.likes);
            $('#dislikes').text(user.dislikes);
            $('#sports').text('Sports: ' + user.sports.join(', '));
            $('#teams').text('Teams: ' + user.teams.join(', '));
            $('#rating').text(user.rating);
            // Adicione aqui o código para preencher os comentários e eventos do usuário
        },
        error: function(error) {
            if (error.status === 404) {
                window.location.href = '../pages/404.html'; // substitua por sua URL da página 404
            } else {
                console.error('Erro ao buscar usuário:', error);
            }
        }
    });
});

document.getElementById('button').addEventListener('click', function() {
    window.location.href = '../pages/user-edit.html'; // Substitua por sua URL
});