// show / hide functions

const show = element => element.classList.remove("hidden");
const hide = element => element.classList.add("hidden");

// dumb down text function

const dumbText = text => text.trim().toLowerCase();

// search through notes

const searchForm = document.getElementById("search-form");
const searchInfo = document.getElementById("search-info");

const getWrappers = () => Array.from(document.querySelectorAll(".note-wrapper"));
// const getNotes = () => Array.from(document.querySelectorAll(".note"));

searchForm.addEventListener("submit", event => {
	event.preventDefault();

	const data = new FormData(searchForm);
	const plainQuery = data.get("query");
	const query = dumbText(plainQuery);

	// if (query === "") return getNotes().forEach(show), hide(searchInfo);

	if (query === "") {
		getWrappers().forEach(show);
		hide(searchInfo);

		return;
	}

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

// change note view layout

const container = document.getElementById("notes");
const layout = document.getElementById("note-layout");

layout.addEventListener("click", event => {
	const { display } = getComputedStyle(container);

	if (display === "grid") {
		container.style.display = "block";
	} else {
		container.style.display = "grid";
	}
})