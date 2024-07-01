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
            $('#country').text(user.country);
            $('#state').text(user.state);
            $('#city').text(user.city);
            $('#neighborhood').text(user.neighborhood);
            $('#birthDate').text(user.birthDate);
            $('#gender').text(user.gender);
            $('#likes').text(user.likes);
            $('#dislikes').text(user.dislikes);
            // Ensure user.sports and user.teams are arrays before calling join
            $('#sports').text('Sports: ' + (Array.isArray(user.sports) ? user.sports.join(', ') : 'N/A'));
            $('#teams').text('Teams: ' + (Array.isArray(user.teams) ? user.teams.join(', ') : 'N/A'));
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