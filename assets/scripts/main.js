// Backend URL
const serverURL = 'http://localhost:3000';


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