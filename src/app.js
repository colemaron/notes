document.addEventListener("paste", event => {
	event.preventDefault();
	
	const text = event.clipboardData.getData("text/plain");

	document.execCommand("insertText", false, text);
});

document.addEventListener("keydown", event => {
	const active = document.activeElement;

	if (active.getAttribute("contenteditable")) {
		if (event.key === "Tab") {
			event.preventDefault();

			document.execCommand('insertHTML', false, '&#009');
		}
	}
})