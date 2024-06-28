$(document).ready(function() {
    $.ajax({
        url: `${serverURL}/users`,
        type: 'GET',
        success: function(users) {
            users.forEach(function(user) {
                var userElement = `
                    <div class="user" data-id="${user.id}">
                        <h2>${user.username}</h2>
                        <p>Rating: ${user.rating}</p>
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