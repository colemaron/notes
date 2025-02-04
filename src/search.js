const noteContainer = document.getElementById("notes");

// get and update notes

let noteElements = Array.from(noteContainer.querySelectorAll(".note"));

const observer = new MutationObserver(mutations => {
	noteElements = Array.from(noteContainer.querySelectorAll(".note"));

	console.log("updated");
});

observer.observe(noteContainer, { childList: true });

// show - hide functions

function show(element) { element.classList.remove("hidden"); };
function hide(element) { element.classList.add("hidden"); };

// search for note via contents

const searchForm = document.getElementById("search-form");
const searchInfo = document.getElementById("search-info");

function searchNotes(query = "") {
	let results = 0;

	for (note of noteElements) {
		const text = note.textContent.toLowerCase();

		if (text.includes(query)) {
			show(note);

			results++;
		} else {
			hide(note);
		}
	}

	if (query === "") {
		hide(searchInfo);
	} else {
		show(searchInfo);

		const amount = results === 0 ? "No" : results
		const s = results === 1 ? "" : "s";

		searchInfo.textContent = `${amount} result${s} found for "${query}".`;
	}
}

// submit search query

searchForm.addEventListener("submit", event => {
	event.preventDefault();

	const data = new FormData(searchForm);
	const query = data.get("query").toLowerCase();

	searchNotes(query);
})

searchForm.addEventListener("reset", searchNotes)

// sort notes

const sortForm = document.getElementById("sort-form");

const sortFunctions = {
	newest: (a, b) => {
		return new Date(b.dataset.created) - new Date(a.dataset.created);
	},
	oldest: (a, b) => {
		return new Date(a.dataset.created) - new Date(b.dataset.created);
	},
	alphabetical: (a, b) => {
		return a.dataset.title.localeCompare(b.dataset.title);
	}
}

function sortNotes(sort = "newest") {
	noteElements
		.sort(sortFunctions[sort])
		.forEach(note => noteContainer.appendChild(note));
}

sortForm.addEventListener("change", () => {
	const data = new FormData(sortForm);

	sortNotes(data.get("sort"));
})