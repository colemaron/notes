// temporary data

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomImage() {
	const id = random(0, 1024);

	const width = random(500, 1000);
	const height = random(500, 1000);

	return `https://picsum.photos/id/${id}/${width}/${height}.webp`;
}

const keyName = "age";

const object = {
	name: "name name",
	age: 30,
}

console.log(object[keyName]);

const exampleNotes = [
	{
		created: new Date().toLocaleString(),
		title: "This is a test title with a loooooonnnnnnnnnnnnngggggggggggggloooooonnnnnnnnnnnnnggggggggggggg title in it in fact its even longer now and it just keeps going",
		labels: ["School"],
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
			{ type: "image", data: randomImage() }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "This is a test title with a loooooonnnnnnnnnnnnngggggggggggggloooooonnnnnnnnnnnnnggggggggggggg title in it in fact its even longer now and it just keeps going",
		labels: ["Reminder"],
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
			{ type: "image", data: randomImage() }
		]
	},
	{
		created: new Date().toLocaleString(),
		title: "This is a test title with a loooooonnnnnnnnnnnnngggggggggggggloooooonnnnnnnnnnnnnggggggggggggg title in it in fact its even longer now and it just keeps going",
		labels: ["Personal"],
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
			{ type: "image", data: randomImage() }
		]
	},
];

localStorage.setItem("notes", JSON.stringify(exampleNotes));

// note data

const notes = JSON.parse(localStorage.getItem("notes")) || [];

// load note element

const noteTemplate = document.getElementById("note-template");

function loadNoteDOM(note) {
	const noteElement = noteTemplate.content.cloneNode(true);

	const noteTitle = noteElement.querySelector(".note-title");
	const noteDate = noteElement.querySelector(".note-date");
	const noteLabels = noteElement.querySelector(".note-labels");
	const noteContent = noteElement.querySelector(".note-content");

	// set info

	noteTitle.textContent = note.title;
	noteDate.textContent = note.created;

	// fill labels

	for (label of note.labels) {
		const li = document.createElement("li");
		li.dataset.label = label.toLowerCase();
		li.textContent = label;
		
		noteLabels.appendChild(li);
	}

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
			case "image":
				const img = document.createElement("img");
				img.src = section.data;

				noteContent.appendChild(img);

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

function filterNotes(selected) {
	const notes = document.querySelectorAll(".note");

	for (const note of notes) {
		const labelElements = Array.from(note.querySelector(".note-labels").children);
		const labelValues = labelElements.map(element => element.dataset.label);

		const matches = labelValues.some(label => selected.includes(label));

		if (matches || selected.length === 0) {
			note.style.display = "flex";
		} else {
			note.style.display = "none";
		}
	}
}

const filterForm = document.getElementById("filter-form");

filterForm.addEventListener("change", () => {
	const selectedLabels = [];

	for (const element of filterForm.elements) {
		if (element.type === "checkbox" && element.checked) {
			selectedLabels.push(element.id.toLowerCase());
		}
	}

	filterNotes(selectedLabels);
});