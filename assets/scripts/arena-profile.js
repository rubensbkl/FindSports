$(document).ready(function() {
    // Obtenha o ID do usuário da URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    $.ajax({
        url: `${serverURL}/user-profile/${id}`,
        type: 'GET',
        success: function(user) {
            var userElement = `
                <div class="user">
                    <h2>${user.username}</h2>
                    <p>Country: ${user.country}</p>
                    <p>State: ${user.state}</p>
                    <p>City: ${user.city}</p>
                    <p>Neighborhood: ${user.neighborhood}</p>
                    <p>Sports: ${user.sports.join(', ')}</p>
                    <p>Birth Date: ${user.birthDate}</p>
                    <p>Gender: ${user.gender}</p>
                    <p>Teams: ${user.teams.join(', ')}</p>
                    <p>Rating: ${user.rating}</p>
                    <p>Likes: ${user.likes}</p>
                    <p>Dislikes: ${user.dislikes}</p>
                </div>
            `;
            $('#user-profile').html(userElement);
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