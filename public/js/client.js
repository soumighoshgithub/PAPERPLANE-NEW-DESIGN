const socket = io();

var username;

do {
    username = prompt("Enter your name to join:");
} while (!username);

socket.emit("new-user-joined", username);

socket.on('user-connected', (socket_name) => {
    userJoinLeft(socket_name, 'joined');
});

function userJoinLeft(name, status) {

}