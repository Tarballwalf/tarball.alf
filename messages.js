var messages = [
    'Not Found',
    'You seem to be lost...',
    'You\'re lost',
    'Hardcore Gay Yiff',
]
function newMessage() {
        var randomNumber = Math.floor(Math.random() * (messages.length));
        document.getElementById('messsageDisplay').innerHTML = messages[randomNumber];
}
