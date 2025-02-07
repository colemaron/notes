// show - hide functions

function show(element) { element.classList.remove("hidden"); };
function hide(element) { element.classList.add("hidden"); };

// search for note via contents

const searchForm = document.getElementById("search-form");
const searchInfo = document.getElementById("search-info");

function searchNotes(query) {
	let results = 0;

	// show results

	for (note of noteElements) {
		const text = note.textContent.toLowerCase();

		if (text.includes(query)) {
			show(note);

			results++;
		} else {
			hide(note);
		}
	}

	// update result info

	if (query === "") {
		hide(searchInfo);
	} else {
		show(searchInfo);

		const amount = results === 0 ? "No" : results
		const s = results === 1 ? "" : "s";

		searchInfo.innerHTML = `${amount} result${s} found for <span id="search-query">${query}</span>`;
	}
}

// submit search query

searchForm.addEventListener("submit", event => {
	event.preventDefault();

	const data = new FormData(searchForm);
	const query = data.get("query").toLowerCase();

	searchNotes(query);

	console.log("searched notes");
})

// sort notes

const noteContainer = document.getElementById("notes");
const noteElements = document.querySelectorAll(".note");

const sortForm = document.getElementById("sort-form");

const sortFunctions = {
	"newest": (a, b) => new Date(b.dataset.created) - new Date(a.dataset.created),
	"oldest": (a, b) => new Date(a.dataset.created) - new Date(b.dataset.created),
	"a-z":    (a, b) => a.dataset.title.localeCompare(b.dataset.title)
}

function sortNotes(sort) {
	Array.from(noteElements)
		.sort(sortFunctions[sort])
		.forEach(note => noteContainer.appendChild(note));

	console.log("sorted notes");
}

sortForm.addEventListener("change", () => {
	const data = new FormData(sortForm);

	sortNotes(data.get("sort"));
})