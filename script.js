/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const messagesContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {


    if (event.key == 'Enter') {

        const messageText = sendInput.value;
        const newMessage = document.createElement('div');
        newMessage.classList.add('items');
        newMessage.textContent = messageText;
        messagesContainer.append(newMessage);
        const collection = document.querySelectorAll('.items');
        sendInput.value = '';

        newMessage.addEventListener('click', clickOnMe);

        function clickOnMe() {
            newMessage.classList.toggle('done');
        };
    };
})