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
setInterval(saveNotes, 10 * 1000);

// add empty note

const newNote = document.getElementById("new-note")

function addNewNote() {
	const note = new Note();
	note.insert();	

	notes.set(note.uuid, note);
}

newNote.addEventListener("click", addNewNote);

// load note elements

for (const [uuid, note] of notes) {
	note.insert();
}

// note event listeners

function copyText(element) {
	navigator.clipboard.writeText(element.textContent);
}

document.addEventListener("click", event => {
	const target = event.target;

	for (const name of target.classList) {
		switch (name) {
			case "copy": {
				copyText(target);
	
				break;
			} case "delete": {
				const note = target.closest(".note");
				
				notes.delete(note.dataset.uuid);
				note.parentNode.remove();
	
				break;
			}
		}
	}
})