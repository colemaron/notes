// search for note via contents

const search = document.getElementById("search");

function fuzzySearch(query) {
	const notes = Array.from(document.querySelectorAll(".note"));

	for (const note of notes) {
		const regex = new RegExp(query.replace(/[a-zA-Z]/g, c => `${c}[\\s\\S]?`), "i");
		
		note.style.display = regex.test(note.textContent) ? "flex" : "none";
	}
}

search.addEventListener("input", event => {
	event.preventDefault();
	
	const start = performance.now();
	fuzzySearch(search.value);
	const end = performance.now();
	
	console.log(`fuzzySearch took ${end - start}ms`);
});