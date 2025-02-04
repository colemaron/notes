// const notes = JSON.parse(localStorage.getItem("notes")) || [];

// // load note element

// const noteTemplate = document.getElementById("note-template");

// function loadNoteDOM(note, index) {
// 	const noteElement = noteTemplate.content.firstElementChild.cloneNode(true);

// 	const noteTitle = noteElement.querySelector(".note-title");
// 	const noteDate = noteElement.querySelector(".note-date");
// 	const noteLabels = noteElement.querySelector(".note-labels");
// 	const noteContent = noteElement.querySelector(".note-content");

// 	// set data

// 	noteElement.dataset.index = index;
// 	noteElement.dataset.created = note.created;
// 	noteElement.dataset.title = note.title;

// 	// set info

// 	noteTitle.textContent = note.title;
// 	noteDate.textContent = note.created;

// 	// fill labels

// 	for (const label of note.labels) {
// 		const li = document.createElement("li");
// 		li.dataset.label = label.toLowerCase();
// 		li.textContent = label;
		
// 		noteLabels.appendChild(li);
// 	}

// 	// fill content

// 	for (const section of note.content) {
// 		switch (section.type) {
// 			case "text":
// 				const text = document.createElement("p");
// 				text.textContent = section.data;

// 				noteContent.appendChild(text);

// 				break;
// 			case "unordered":
// 				const unordered = document.createElement("ul");

// 				for (const item of section.data) {
// 					const li = document.createElement("li");
// 					li.textContent = item;

// 					unordered.appendChild(li);
// 				}

// 				noteContent.appendChild(unordered);

// 				break;
// 			case "ordered":
// 				const ordered = document.createElement("ol");

// 				for (const item of section.data) {
// 					const li = document.createElement("li");
// 					li.textContent = item;

// 					ordered.appendChild(li);
// 				}

// 				noteContent.appendChild(ordered);

// 				break;
// 			case "checklist":
// 				const checklist = document.createElement("ul");
// 				checklist.classList.add("note-checklist");

// 				for (const item of section.data) {
// 					const li = document.createElement("li");

// 					const checkbox = document.createElement("input");
// 					checkbox.type = "checkbox";
// 					checkbox.checked = item.checked;

// 					const label = document.createElement("label");
// 					label.textContent = item.text;

// 					li.appendChild(checkbox);
// 					li.appendChild(label);
// 					checklist.appendChild(li);
// 				}

// 				noteContent.appendChild(checklist);

// 				break;
// 			case "image":
// 				const img = document.createElement("img");
// 				img.src = section.data;

// 				noteContent.appendChild(img);

// 				break;
// 		}
// 	}

// 	// append note to DOM

// 	document.getElementById("notes").appendChild(noteElement);
// }

// // load notes

// function createNotes() {
// 	notes.forEach(loadNoteDOM);
// }

// window.onload = createNotes;





import { Note } from "./note.js";

// load notes

const noteData = JSON.parse(localStorage.getItem("notes")) || [];

console.log(noteData);

for (const note of noteData) {
	new Note(note.title, note.labels, note.content, note.created).addDOM();
}