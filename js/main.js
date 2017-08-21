let closeAlert = document.getElementById('close-alert');
let send = document.getElementsByClassName('send')[0];
let messageInput = document.getElementsByClassName('message-input')[0];
let messageText = document.getElementsByClassName('message-textarea')[0];
let save = document.getElementsByClassName('save')[0];
let cancel = document.getElementsByClassName('cancel')[0];


closeAlert.addEventListener('click', function(){
	this.parentNode.parentNode.style.display = "none";
})

send.addEventListener('click', function(){
	if(messageInput.value === "" || messageText.value === "") {
		alert("Please fill out either the username or message area");
	}
	else {
		messageInput.value = "";
		messageText.value = "";
		alert("Your message has been successfully sent!");
	}
})

save.addEventListener('click', function(){
	alert("Your settings have been saved!");
})

cancel.addEventListener('click', function(){
	
})