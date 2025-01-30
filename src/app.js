// search for note via contents

function searchNotes(query) {
	const notes = document.querySelectorAll(".note");

	const matches = [];

	for (const note of notes) {
		const text = note.textContent.toLowerCase();
		const index = text.indexOf(query.toLowerCase());

		if (index !== -1) {
			note.style.display = "flex";
			matches.push(note);
		} else {
			note.style.display = "none";
		}

		// if (text.includes(query.toLowerCase())) {
		// 	note.style.display = "flex";
		// 	matches.push(note);
		// } else {
		// 	note.style.display = "none";
		// }
	}

	return matches;
}

const search = document.getElementById("search");

search.addEventListener("input", event => {
	event.preventDefault();

	const matches = searchNotes(search.value);

	console.log(matches);
});

// filter notes with labels

function filterNotes(selected) {
	const notes = document.querySelectorAll(".note");

	for (const note of notes) {
		const labelElements = Array.from(note.querySelector(".note-labels").children);
		const labelValues = labelElements.map(element => element.dataset.label);

		const matches = labelValues.some(label => selected.includes(label));

		if (matches || selected.length === 0) {
			note.style.display = "flex";
		} else {
			note.style.display = "none";
		}
	}
}

const filterForm = document.getElementById("filter-form");

filterForm.addEventListener("change", () => {
	const selectedLabels = [];

	for (const element of filterForm.elements) {
		if (element.type === "checkbox" && element.checked) {
			selectedLabels.push(element.id.toLowerCase());
		}
	}

	filterNotes(selectedLabels);
});