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

// add spinner to loading elements



// enlarge image

const fullscreen = document.getElementById("fullscreen");
const fullscreenImage = document.getElementById("fullscreen-image");
const fullscreenSize = document.getElementById("fullscreen-size");

document.addEventListener("click", ({ target }) => {
	if (target.tagName === "IMG") {
		fullscreenImage.src = target.src;
		fullscreen.classList.toggle("hidden");

		fullscreenSize.textContent = `${target.naturalWidth} x ${target.naturalHeight}`;
	}
});