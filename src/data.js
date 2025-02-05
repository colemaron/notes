import { Note } from "./note.js";

// load notes

const jsonData = JSON.parse(localStorage.getItem("notes")) || []

console.log(jsonData);

// save notes

window.addEventListener("beforeunload", Note.saveNotes);

// add new note

const newNote = document.getElementById("new-note");

newNote.addEventListener("click", event => {
	const note = new Note();
});

// note interaction

document.addEventListener("click", event => {
	const target = event.target.closest("button");

	if (!target) { return; }

	const note = target.closest(".note");

	// delete note

	if (target.classList.contains("note-delete")) {
		delete Note.noteElements[note.dataset.key];

		note.remove();
	}
})