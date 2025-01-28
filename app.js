// temporary data

const exampleNotes = [
	{
		created: new Date().toLocaleString(),
		title: "Project Brainstorming asdasdasdasdasdasdasdasdasdasdasdasdasd",
		labels: ["Brainstorming", "Project"],
		content: [
			{ type: "text", data: "Initial ideas for the new project." },
			{ type: "checklist", data: [
				{ checked: false, text: "Research market trends" },
				{ checked: false, text: "Identify key stakeholders" },
				{ checked: true, text: "Draft initial project scope" }
			] },
			{ type: "bullets", data: [
				"Consider potential risks",
				"Outline project goals",
				"Estimate budget requirements"
			] },
			{ type: "list", data: [
				"Define project objectives",
				"Gather resources",
				"Set timeline"
			] },
			{ type: "text", data: "Next steps will be to refine these ideas." },
			{ type: "image", data: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500/300` }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Meeting with the team",
		labels: ["Team", "Meeting"],
		content: [
			{ type: "text", data: "Meeting notes from the team meeting last week." },
			{ type: "checklist", data: [
				{ checked: false, text: "Follow up with the marketing team" },
				{ checked: false, text: "Create a new branch on GitHub" },
				{ checked: true, text: "Update the project timeline" }
			] },
			{ type: "bullets", data: [
				"Clarify the project scope",
				"Set up a new project board on Trello",
				"Create a new budget for the project"
			] },
			{ type: "list", data: [
				"Create a new branch on GitHub",
				"Update the project timeline",
				"Follow up with the marketing team"
			] },
			{ type: "text", data: "Next steps will be to follow up with the team." },
			{ type: "image", data: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500/300` }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Initial Research",
		labels: ["Research"],
		content: [
			{ type: "text", data: "Initial research notes." },
			{ type: "checklist", data: [
				{ checked: false, text: "Research market trends" },
				{ checked: false, text: "Identify key stakeholders" },
				{ checked: true, text: "Draft initial project scope" }
			] },
			{ type: "bullets", data: [
				"Consider potential risks",
				"Outline project goals",
				"Estimate budget requirements"
			] },
			{ type: "list", data: [
				"Define project objectives",
				"Gather resources",
				"Set timeline"
			] },
			{ type: "text", data: "Next steps will be to refine these ideas." },
			{ type: "image", data: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500/300` }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "Long Text",
		labels: ["Text"],
		content: [
			{
				type: "text",
				data:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor lectus sit amet lectus tincidunt, in vestibulum nunc posuere. Sed eget massa vitae nunc cursus ultrices. Nullam auctor, nulla et ultricies malesuada, tellus nunc dignissim nibh, nec feugiat nisl justo et nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor, nisl et ultricies malesuada, tellus nunc dignissim nibh, nec feugiat nisl justo et nunc. Nullam auctor, nulla et ultricies malesuada, tellus nunc dignissim nibh, nec feugiat nisl justo et nunc." +
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor lectus sit amet lectus tincidunt, in vestibulum nunc posuere. Sed eget massa vitae nunc cursus ultrices. Nullam auctor, nulla et ultricies malesuada, tellus nunc dignissim nibh, nec feugiat nisl justo et nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor, nisl et ultricies malesuada, tellus nunc dignissim nibh, nec feugiat nisl justo et nunc. Nullam auctor, nulla et ultricies malesuada, tellus nunc dignissim nibh, nec feugiat nisl justo et nunc."
			}
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "More Text",
		labels: ["Text"],
		content: [
			{ type: "text", data: "More text." },
			{ type: "checklist", data: [
				{ checked: false, text: "Create a new branch on GitHub" },
				{ checked: false, text: "Update the project timeline" },
				{ checked: true, text: "Follow up with the marketing team" }
			] },
			{ type: "bullets", data: [
				"Consider potential risks",
				"Outline project goals",
				"Estimate budget requirements"
			] },
			{ type: "list", data: [
				"Define project objectives",
				"Gather resources",
				"Set timeline"
			] },
			{ type: "text", data: "Next steps will be to follow up with the team." },
			{ type: "image", data: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500/300` }
		]
	}
];

localStorage.setItem("notes", JSON.stringify(exampleNotes));

// note data

const notes = JSON.parse(localStorage.getItem("notes")) || [];

// load note element

const noteTemplate = document.getElementById("note-template");

function loadNoteDOM(note) {
	const noteElement = noteTemplate.content.cloneNode(true);

	const noteTitle = noteElement.querySelector(".note-title");
	const noteLabels = noteElement.querySelector(".note-labels");
	const noteContent = noteElement.querySelector(".note-content");

	// add title

	noteTitle.textContent = note.title;

	// fill labels

	note.labels.forEach(label => {
		const li = document.createElement("li");
		li.textContent = label;
		
		noteLabels.appendChild(li);
	});

	// fill content

	for (const section of note.content) {
		switch (section.type) {
			case "text":
				const p = document.createElement("p");
				p.textContent = section.data;

				noteContent.appendChild(p);

				break;
			case "bullets":
				const ul = document.createElement("ul");
				ul.style.paddingLeft = "1rem";

				for (const bullet of section.data) {
					const li = document.createElement("li");
					li.textContent = bullet;

					ul.appendChild(li);
				}

				noteContent.appendChild(ul);

				break;
			case "list":
				const ol = document.createElement("ol");
				ol.style.paddingLeft = "1rem";

				for (const bullet of section.data) {
					const li = document.createElement("li");
					li.textContent = bullet;

					ol.appendChild(li);
				}

				noteContent.appendChild(ol);

				break;
			case "checklist":
				const checklistUl = document.createElement("ul");
				checklistUl.style.listStyleType = "none";

				for (const item of section.data) {
					const li = document.createElement("li");
					li.style.alignItems = "center";
					li.style.display = "flex";
					li.style.gap = "0.5rem";

					const checkbox = document.createElement("input");
					checkbox.type = "checkbox";
					checkbox.checked = item.checked;

					const label = document.createElement("label");
					label.textContent = item.text;

					li.appendChild(checkbox);
					li.appendChild(label);
					checklistUl.appendChild(li);
				}

				noteContent.appendChild(checklistUl);

				break;
		}
	}

	// append note to DOM

	document.getElementById("notes").appendChild(noteElement);
}

// load notes

window.onload = event => {
	event.preventDefault();

	for (const note of notes) {
		loadNoteDOM(note);
	}
};

// filter notes

const filterForm = document.getElementById("filter-form");

filterForm.addEventListener("change", () => {
	const selectedLabels = [];

	for (const element of filterForm.elements) {
		if (element.type === "checkbox" && element.checked) {
			selectedLabels.push(element.value);
		}
	}

	// use labels here and filter notes
});