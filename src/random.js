function resizeActive() {
	const target = document.activeElement;

	if (target.tagName === "TEXTAREA") {
		target.style.height = target.scrollHeight + "px";
	}
}

document.addEventListener("input", resizeActive);
document.addEventListener("focusout", resizeActive)