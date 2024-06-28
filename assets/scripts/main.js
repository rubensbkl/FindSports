// Backend URL
const serverURL = 'https://be1ab069-cefb-4c5f-917f-a13eb86ceebd-00-21xww2ssvkinv.kirk.replit.dev';


// Dropdown menu
let userMenu = document.getElementById("userMenu");
let userNotification = document.getElementById("userNotification");

function toggleUserMenu() {
    if (!userNotification.classList.contains("active")) {
        userMenu.classList.toggle("active");
    }
}

function toggleNotificationMenu() {
    if (!userMenu.classList.contains("active")) {
        userNotification.classList.toggle("active");
    }
}

// Logout
$('#logoutButton').click(function() {
    // Limpa o token de usuário armazenado
    sessionStorage.removeItem('currentUserToken');

    // Redireciona o usuário para a página de login
    window.location.href = '../pages/landing.html';
});

// Enviar notificação para o usuário
$('#sendNotification').click(function() {
    $.ajax({
        url: `${serverURL}/send-notification`,
        type: 'POST',
        data: JSON.stringify({
            id: 1,
            content: "Você recebeu uma notificação de Fu",
            sender: 1,
            receiver: 2
        }),
        contentType: 'application/json',
        success: function(response) {
            console.log('Notification sent successfully:', response);
        },
        error: function(error) {
            console.error('Error sending notification:', error);
        }
    });
});

function setup() {
    $('#nav-username').text('@' + localStorage.getItem('currentUserUsername'));
}

    // // Obtenha o ID do usuário da URL
    // const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');

    // $.ajax({
    //     url: `${serverURL}/user-profile/${id}`,
    //     type: 'GET',
    //     success: function(user) {
    //         $('#name').text(user.name);
    //         $('#username').text('@' + user.username);
    //         $('#country').text('País: ' + user.country);
    //         $('#state').text('Estado: ' + user.state);
    //         $('#city').text('Cidade: ' + user.city);
    //         $('#neighborhood').text('Bairro: ' + user.neighborhood);
    //         $('#birthDate').text('Idade: ' + user.birthDate);
    //         $('#gender').text('Sexo: