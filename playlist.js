window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonOnClick;
}

function handleButtonOnClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	var li = document.createElement("li");
	li.innerHTML = songName;
	var ul = document.getElementById("playList");
	ul.appendChild(li);
}

