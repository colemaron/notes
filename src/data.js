import { Note } from "./note.js";

// map conversion

const mapFromObject = object => new Map(Object.entries(object));
const objectFromMap = map => Object.fromEntries(map);

// object to note objects

const dataToNote = ([uuid, data]) => [uuid, new Note(...Object.values(data))];

function jsonObjectToNotes(json) {
	const converted = Object.entries(json).map(dataToNote);

	return mapFromObject(Object.fromEntries(converted));
}

// load notes

const json = JSON.parse(localStorage.getItem("notes")) || {};
const notes = jsonObjectToNotes(json);

// save notes

function saveNotes() {
	const object = objectFromMap(notes);
	const json = JSON.stringify(object);

	localStorage.setItem("notes", json);
}

window.addEventListener("beforeunload", saveNotes);

// add empty note

function addNote() {
	const note = new Note();

	notes.set(note.uuid, note);
}

// load note elements

for (const [uuid, note] of notes) {
	note.insert();
}