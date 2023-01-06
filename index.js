function addMessage() {
  let inputChat = document.querySelector('#input-chat');

  if (!inputChat.value) return;

  let name = 'Me';
  let message = inputChat.value;
  let time = '11:28 PM';
  let divMyChat = `<div class="div-my-chat">
		<div class="div-chat">
			<div class="name">${name}</div>
			<div class="message">${message}</div>
			<div class="time">${time}</div>
		</div>
	</div>`;

  document.querySelector('#div-all-chat').innerHTML += divMyChat;

  document.querySelector('#input-chat').value = '';
}
