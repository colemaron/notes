import { Note } from "./note.js";

// load notes

const jsonData = JSON.parse(localStorage.getItem("notes")) || []
const noteData = jsonData.map(note => new Note(...Object.values(note)))

for (const note of noteData) {
	note.addDOM();
}

console.log(Note.allNotes);