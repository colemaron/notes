// prevent styled pasting

document.addEventListener("paste", event => {
	event.preventDefault();
	
	const text = event.clipboardData.getData("text/plain");

	document.execCommand("insertText", false, text);
});

// allow tab typing in contents

document.addEventListener("keydown", event => {
	const element = document.activeElement;

	if (element.tagName === "TEXTAREA") {
		if (event.key === "Tab") {
			event.preventDefault();
			document.execCommand("insertHTML", false, "&#009");
		} else if (event.key === "a" && event.ctrlKey) {
			event.preventDefault();
			element.select();
		} else if (event.key === "Enter") {
			if (element.classList.contains("title")) {
				event.preventDefault();
				element.blur();
			}
		}
	}
})

// enlarge image

const fullscreen = document.getElementById("fullscreen");
const fullscreenImage = document.getElementById("fullscreen-image");

document.addEventListener("click", ({ target }) => {
	if (target.tagName === "IMG") {
		fullscreenImage.src = target.src;

		fullscreen.classList.toggle("hidden");
	}
});