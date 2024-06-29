$(document).ready(function() {
    $.ajax({
        url: `${serverURL}/users`,
        type: 'GET',
        success: function(users) {
            var esportes;
            users.forEach(function(user) {
                var userElement = `
                    <div class="user column box" data-id="${user.id}">
                        <div class="negocinhodorating center">
                            <p>${user.rating}</p>
                        </div>
                        <h2 class="center">${user.username}</h2>
                        <div class="center">Esportes:</div>
                        <div class="center row">
                            ${Array.isArray(user.sports) ? user.sports.map(sport => `<div class="negocinhodorating">${sport}</div>`).join('') : ''}
                        </div>
                    </div>
                `;
                $('#users').append(userElement);
            });

            // Adicione um evento de clique a cada elemento de usuário
            $('.user').click(function() {
                var userId = $(this).data('id');
                window.location.href = `/pages/user-profile.html?id=${userId}`;
            });
        },
        error: function(error) {
            console.error('Erro ao buscar usuários:', error);
        }
    });
});