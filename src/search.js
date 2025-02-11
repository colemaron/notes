// show / hide functions

const show = element => element.classList.remove("hidden");
const hide = element => element.classList.add("hidden");

// dumb down text function

const dumbText = text => text.trim().toLowerCase();

// search through notes

const searchForm = document.getElementById("search-form");
const searchInfo = document.getElementById("search-info");

const getWrappers = () => Array.from(document.querySelectorAll(".note-wrapper"));
const getNotes = () => Array.from(document.querySelectorAll(".note"));

searchForm.addEventListener("submit", event => {
	event.preventDefault();

	const data = new FormData(searchForm);
	const plainQuery = data.get("query");
	const query = dumbText(plainQuery);

	if (query === "") return getWrappers().forEach(show), hide(searchInfo);

	let n = 0;

	for (const note of getWrappers()) {
		const text = dumbText(note.textContent);

		if (text.includes(query)) {
			n++;
			
			show(note);
		} else {
			hide(note);
		}
	}

	searchInfo.innerHTML = `${n ? n : "No"} result${n === 1 ? "" : "s"} found for <span id="search-query">${plainQuery}</span>`;

	show(searchInfo);
});

// sort through notes

const noteContainer = document.getElementById("notes");
const sortForm = document.getElementById("sort-form");
const newNote = document.getElementById("new-note");

const moveNote = note => noteContainer.appendChild(note.parentNode);

const sortFunctions = {
	"newest": (a, b) => b.dataset.created - a.dataset.created,
	"oldest": (a, b) => a.dataset.created - b.dataset.created,
	"a-z":    (a, b) => a.dataset.title.localeCompare(b.dataset.title),
}

function sortNotes() {
	const data = new FormData(sortForm);
	const sort = data.get("sort");

	getNotes().sort(sortFunctions[sort]).forEach(moveNote);
}

sortForm.addEventListener("change", sortNotes);
newNote.addEventListener("click", sortNotes);

sortNotes();

// change note view layout

const container = document.getElementById("notes");
const layout = document.getElementById("note-layout");

function changeLayout() {
	const { display } = getComputedStyle(container);

	if (display === "grid") {
		container.style.display = "block";
		layout.style.transform = "rotate(90deg)";
	} else {
		container.style.display = "grid";
		layout.style.transform = "rotate(0deg)";
	}
}

layout.addEventListener("click", changeLayout);