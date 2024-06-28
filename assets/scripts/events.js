$(document).ready(function() {
    $.ajax({
        url: `${serverURL}/eventos`,
        type: 'GET',
        success: function(eventos) {
            eventos.forEach(function(evento) {
                var eventoElement = `
                    <div class="evento">
                        <h2>${evento.name}</h2>
                        <p>Address: ${evento.address}</p>
                        <p>Opening: ${evento.datetime}</p>
                        <p>Description: ${evento.description}</p>
                    </div>
                `;
                $('#events').append(eventoElement);
            });
        },
        error: function(error) {
            console.error('Erro ao buscar eventos:', error);
        }
    });
});