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

const fullscreen = document.getElementById("fullscreen");

document.addEventListener("click", ({ target }) => {
	if (target.tagName === "IMG") {
		fullscreen.src = target.src;
		fullscreen.classList.toggle("hidden");
	}
});