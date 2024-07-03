$(document).ready(function() {
    $.ajax({
        url: `${serverURL}/teams`,
        type: 'GET',
        success: function(teams) {
            teams.forEach(function(team) {
                var teamElement = `
                    <div class="list-container" data-id="${team.id}">
                        <h2 class="arena-name">${team.name}</h2>
                        <div class="sport">${team.sport}</div>
                        <div class="row">
                            <div class="open">
                                <div class="primary black">Abre</div>
                                <div>${team.opening}</div>
                            </div>
                            <div>
                                <div class="primary black">Fecha</div>
                                <div>${team.closing}</div>
                            </div>
                        </div>
                    </div>
                `;
                $('#teams').append(teamElement);

                
            });

            // Adicione um evento de clique a cada elemento de usuário
            $('.list-container').click(function() {
                var teamId = $(this).data('id');
                window.location.href = `/pages/team-profile.html?id=${teamId}`;
            });
        },
        error: function(error) {
            console.error('Erro ao buscar times:', error);
        }
    });
});

document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector('#search-input').value.toLowerCase();
    const listItems = document.querySelectorAll('.list-container');

    listItems.forEach(item => {
        // Assuming you want to compare the text content of the item
        let text = item.textContent || item.innerText; // This gets the text content of the item

        if (text.toLowerCase().includes(searchInput)) { // Use searchInput directly
            item.style.display = ''; // Consider using 'block' or 'flex' depending on your layout
        } else {
            item.style.display = 'none';
        }
    });
}