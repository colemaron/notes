// prevent styled pasting

document.addEventListener("paste", event => {
	event.preventDefault();
	
	const text = event.clipboardData.getData("text/plain");

	document.execCommand("insertText", false, text);
});

// allow tab typing in contents

document.addEventListener("keydown", event => {
	const active = document.activeElement;

	if (active.getAttribute("contenteditable")) {
		if (event.key === "Tab") {
			event.preventDefault();

			document.execCommand('insertHTML', false, '&#009');
		}
	}
})

// enlarge image

document.addEventListener("click", event => {
	const target = event.target;

	if (target.tagName === "IMG") {
		target.classList.toggle("enlarged");
	}
})