$(document).ready(function() {
    $.ajax({
        url: `${serverURL}/arenas`,
        type: 'GET',
        success: function(arenas) {
            arenas.forEach(function(arena) {
                var arenaElement = `
                    <div class="arena">
                        <h2 class="arena-name">${arena.name}</h2>
                        <p class="arena-address">Address: ${arena.address}</p>
                        <p class="arena-sports">Sports: ${arena.sports.join(', ')}</p>
                        <p class="arena-opening">Opening: ${arena.opening}</p>
                        <p class="arena-closing">Closing: ${arena.closing}</p>
                        <p class="arena-contact">Contact: ${arena.contact.phone}</p>
                        <p class="arena-description">Description: ${arena.description}</p>
                    </div>
                `;
                $('#arenas').append(arenaElement);
            });
        },
        error: function(error) {
            console.error('Erro ao buscar arenas:', error);
        }
    });
});