// get and update notes

let noteElements = Array.from(document.querySelectorAll(".note"));

const observer = new MutationObserver(() => {
	noteElements = Array.from(document.querySelectorAll(".note"));
});

observer.observe(document.getElementById("notes"), { childList: true });

// search for note via contents

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", event => {
	event.preventDefault();

	const data = new FormData(searchForm);
	const regex = new RegExp(data.get("query").split("").join(".{0,1}"), "i");

	let results = 0;

	for (note of noteElements) {
		note.style.display = regex.test(note.textContent) ? "flex" : "none";

		results++;
	}

	if (results === 0) {
		alert("No results found");
	}
})

searchForm.addEventListener("reset", event => {
	for (note of noteElements) {
		note.style.display = "flex";
	}
})


// const search = document.getElementById("search");

// function fuzzySearch(query) {
// 	const notes = Array.from(document.querySelectorAll(".note"));

// 	for (const note of notes) {
// 		const regex = new RegExp(query.replace(/[a-zA-Z]/g, c => `${c}[\\s\\S]?`), "i");
		
// 		note.style.display = regex.test(note.textContent) ? "flex" : "none";
// 	}
// }

// search.addEventListener("input", event => {
// 	event.preventDefault();
	
// 	const start = performance.now();
// 	fuzzySearch(search.value);
// 	const end = performance.now();
	
// 	console.log(`fuzzySearch took ${end - start}ms`);
// });