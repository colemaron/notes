import { Note } from "./note.js";

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate() {
	const start = new Date(2025, 0, 1);
	const end = new Date();

	const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

	return randomDate.toLocaleString();
}

function randomImage() {
	return `https://picsum.photos/seed/${Math.random()}/0/0.webp`
}

const temporaryNotes = [
	new Note(
		"Grocery List",
		randomDate(),
		[
			{ type: "unordered", data: [
				"Milk",
				"Bread",
				"Eggs",
				"Pizza",
				"Cheese"
			]},
			{ type: "checklist", data: [
				{ checked: true, text: "Buy milk" },
				{ checked: false, text: "Buy eggs" },
				{ checked: false, text: "Buy pizza" },
				{ checked: false, text: "Buy cheese" },
				{ checked: false, text: "Buy bread" }
			]},
			{ type: "text", data: "Next week, I'll go shopping." },
			{ type: "image", data: randomImage() }
		],
		["Shopping", "Reminder"], 
	),
	new Note(
		"Test Note",
		randomDate(),
		[
			{ type: "text", data: "This is a test note." },
			{ type: "unordered", data: [
				"Test 1",
				"Test 2",
				"Test 3"
			]},
			{ type: "checklist", data: [
				{ checked: true, text: "Test 1" },
				{ checked: false, text: "Test 2" },
				{ checked: false, text: "Test 3" }
			]},
			{ type: "text", data: "This is the end of the test note." },
			{ type: "image", data: randomImage() }
		],
		["Test", "Reminder"], 
	),
	new Note(
		"Reminder",
		randomDate(),
		[
			{ type: "text", data: "This is a reminder note." },
			{ type: "unordered", data: [
				"Buy milk",
				"Buy eggs",
				"Buy pizza",
				"Buy cheese",
				"Buy bread"
			]},
			{ type: "image", data: randomImage() },
			{ type: "checklist", data: [
				{ checked: false, text: "Buy eggs" },
				{ checked: false, text: "Buy pizza" },
				{ checked: false, text: "Buy cheese" },
				{ checked: false, text: "Buy bread" }
			]},
			{ type: "text", data: "This is the end of the reminder note." }
		],
		["Shopping", "Reminder"], 
	),
];

// localStorage.setItem("notes", JSON.stringify(temporaryNotes));