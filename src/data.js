import { Note } from "./note.js";

// load notes

const json = JSON.parse(localStorage.getItem("notes")) || {};

// save notes

function saveNotes() {
	const json = JSON.stringify(Object.values(notes));

	localStorage.setItem("notes", json);
}