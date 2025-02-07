// show / hide functions

const show = element => element.classList.remove("hidden");
const hide = element => element.classList.add("hidden");

// dumb down text function

const dumbText = text => text.trim().toLowerCase();

// search through notes

const searchForm = document.getElementById("search-form");
const searchInfo = document.getElementById("search-info");

const getNotes = () => Array.from(document.querySelectorAll(".note"));

searchForm.addEventListener("submit", event => {
	event.preventDefault();

	const data = new FormData(searchForm);
	const plainQuery = data.get("query");
	const query = dumbText(plainQuery);

	if (query === "") return getNotes().forEach(show), hide(searchInfo);

	let n = 0;

	for (const note of getNotes()) {
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