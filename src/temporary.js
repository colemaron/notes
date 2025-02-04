import { Note } from "./note.js";

const temporaryNotes = [
	// {
	// 	created: randomDate(),
	// 	title: "This is a test title with a loooooonnnnnnnnnnnnngggggggggggggloooooonnnnnnnnnnnnnggggggggggggg title in it in fact its even longer now and it just keeps going",
	// 	labels: ["School", "Personal", "Work", "Family", "Home", "Reminder", "Social", "Food", "Health", "Sports", "Shopping", "Vacation", "Relaxation", "Leisure", "Entertainment", "Creative", "Intellectual", "Physical", "Emotional", "Financial"],
	// 	content: [
	// 		{ type: "text", data: "Initial ideas for the new project." },
	// 		{ type: "checklist", data: [
	// 			{ checked: false, text: "Research market trends" },
	// 			{ checked: false, text: "Identify key stakeholders" },
	// 			{ checked: true, text: "Draft initial project scope" }
	// 		] },
	// 		{ type: "unordered", data: [
	// 			"Consider potential risks",
	// 			"Outline project goals",
	// 			"Estimate budget requirements"
	// 		] },
	// 		{ type: "ordered", data: [
	// 			"Define project objectives",
	// 			"Gather resources",
	// 			"Set timeline"
	// 		] },
	// 		{ type: "text", data: "Next steps will be to refine these ideas." },
	// 		{ type: "image", data: randomImage() }
	// 	]
	// },

	new Note(
		"Test Title", 
		["School", "Reminder"], 
		[
			{ type: "text", data: "Initial ideas for the new project." },
			{ type: "checklist", data: [
				{ checked: false, text: "Research market trends" },
				{ checked: false, text: "Identify key stakeholders" },
				{ checked: true, text: "Draft initial project scope" }
			]},
			{ type: "unordered", data: [
				"Consider potential risks",
				"Outline project goals",
				"Estimate budget requirements"
			]},
			{ type: "ordered", data: [
				"Define project objectives",
				"Gather resources",
				"Set timeline"
			]},
			{ type: "text", data: "Next steps will be to refine these ideas." },
			{ type: "image", data: `https://picsum.photos/seed/${Math.random()}/0/0` }
		], 
		new Date().toLocaleString()
	),
];

localStorage.setItem("notes", JSON.stringify(temporaryNotes));