// temporary data

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomImage() {
	const id = random(0, 1024);

	return `https://picsum.photos/id/${id}/0/0`;
}

const exampleNotes = [
	// {
	// 	created: new Date().toLocaleString(),
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
	{
		created: new Date().toLocaleString(),
		title: "Meeting Notes",
		labels: ["School", "Reminder"],
		content: [
			{ type: "text", data: "Meeting with John to discuss project proposal and refine the scope and details." },
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 1",
		labels: ["Personal"],
		content: [
			{ type: "text", data: "I need to buy milk." },
			{ type: "unordered", data: [
				"Buy milk",
				"Buy eggs",
				"Buy bread"
			] },
			{ type: "checklist", data: [
				{ checked: true, text: "Buy milk" },
				{ checked: false, text: "Buy eggs" },
				{ checked: false, text: "Buy bread" }
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 2",
		labels: ["Work"],
		content: [
			{ type: "text", data: "I need to finish the report by the end of the day." },
			{ type: "unordered", data: [
				"Finish the report",
				"Send it to John",
				"Wait for feedback"
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 3",
		labels: ["Sports"],
		content: [
			{ type: "text", data: "I need to start training for the marathon." },
			{ type: "checklist", data: [
				{ checked: false, text: "Start training" },
				{ checked: false, text: "Buy new running shoes" },
				{ checked: false, text: "Find a running partner" }
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 4",
		labels: ["Creative"],
		content: [
			{ type: "text", data: "I need to start working on my new novel." },
			{ type: "ordered", data: [
				"Start writing",
				"Write 500 words",
				"Edit and proofread"
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 5",
		labels: ["Intellectual"],
		content: [
			{ type: "text", data: "I need to start learning a new language." },
			{ type: "unordered", data: [
				"Buy language course",
				"Practice for 1 hour a day",
				"Find a language partner"
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 6",
		labels: ["Relaxation"],
		content: [
			{ type: "text", data: "I need to start practicing yoga." },
			{ type: "unordered", data: [
				"Buy yoga mat",
				"Practice for 30 minutes a day",
				"Find a yoga partner"
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 7",
		labels: ["Health"],
		content: [
			{ type: "text", data: "I need to start eating healthier." },
			{ type: "unordered", data: [
				"Start eating more fruits and vegetables",
				"Stop eating junk food",
				"Drink more water"
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 8",
		labels: ["Physical"],
		content: [
			{ type: "text", data: "I need to start exercising more." },
			{ type: "unordered", data: [
				"Start exercising for 30 minutes a day",
				"Find an exercise buddy",
				"Buy new workout clothes"
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 9",
		labels: ["Emotional"],
		content: [
			{ type: "text", data: "I need to start practicing mindfulness." },
			{ type: "unordered", data: [
				"Start practicing mindfulness for 10 minutes a day",
				"Find a mindfulness partner",
				"Buy a mindfulness app"
			] }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Random Note 10",
		labels: ["Financial"],
		content: [
			{ type: "text", data: "I need to start saving money." },
			{ type: "unordered", data: [
				"Start saving 10% of income",
				"Find a financial advisor",
				"Buy a budgeting app"
			] }
		]
	},
];

// localStorage.setItem("notes", JSON.stringify(exampleNotes));