const noteContainer = document.getElementById("notes");

function date() {
	return new Date().toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" });
}

class Note {
	// construct new note

	constructor() {
		this.title = "Untitled Note";
		this.created = date();
		this.content = [];
		this.labels = new Set();

		this.uuid = crypto.randomUUID();
		this.folder = "Notes";
	}

	// insert dom note element

	insert() {
		// create content

		

		// create labels

		const labels = Array.from(this.labels).map(label => `<li>${label}</li>`).join("");

		// create final note

		const note = `
			<div class="note">
				<h2 class="title">${this.title}</h2>
				<div class="content">${this.content}</div>
				<ul class="labels">${labels}</ul>
				
				<div class="info">
					<p class="created">${this.created}</p>
					<button class="delete"></button>
					<button class="edit"></button>
				</div>
			</div>
		`

		// add note to DOM

		noteContainer.innerHTML += note;
	}
}

export { Note };