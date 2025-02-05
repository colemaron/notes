function generateUniqueKey() {
	const array = new Uint32Array(1);
	crypto.getRandomValues(array);

	return array[0].toString(36);
}

class Note {
	static noteElements = {};

	static template = document.getElementById("note-template");
	static container = document.getElementById("notes");

	// save all notes

	static saveNotes() {
		localStorage.setItem("notes", JSON.stringify(Note.noteElements));
	}

	// construct new note

	constructor(title, created, labels, content) {
		this.title = title || "Untitled";
		this.created = created || new Date().toLocaleString();
		this.content = content || [];
		this.labels = labels || [];

		this.key = generateUniqueKey();
		this.element = null;
		
		this.insert();
	}

	// save note to element object

	save() {
		const key = `${this.title} - ${this.created} - ${this.key}`;

		this.element.dataset.key = key;
		Note.noteElements[key] = this;
	}

	// insert dom note element

	insert() {
		const noteElement = Note.template.content.firstElementChild.cloneNode(true);

		const [noteTitle, noteContent, noteLabels, noteInfo] = noteElement.children;
		const [noteCreated, noteEdit, noteDelete] = noteInfo.children;
		
		this.element = noteElement;

		// add single info

		noteTitle.textContent = noteElement.dataset.title = this.title;
		noteCreated.textContent = noteElement.dataset.createElement = this.created;

		// add content

		for (const section of this.content) {
			switch (section.type) {
				case "text":
					const text = document.createElement("p");
					text.textContent = section.data;

					noteContent.appendChild(text);

					break;
				case "unordered":
					const unordered = document.createElement("ul");

					for (const item of section.data) {
						const li = document.createElement("li");
						li.textContent = item;

						unordered.appendChild(li);
					}

					noteContent.appendChild(unordered);

					break;
				case "ordered":
					const ordered = document.createElement("ol");

					for (const item of section.data) {
						const li = document.createElement("li");
						li.textContent = item;

						ordered.appendChild(li);
					}

					noteContent.appendChild(ordered);

					break;
				case "checklist":
					const checklist = document.createElement("ul");
					checklist.classList.add("note-checklist");	

					for (const item of section.data) {
						const li = document.createElement("li");

						const checkbox = document.createElement("input");
						checkbox.classList.add("checkbox");
						checkbox.checked = item.checked;
						checkbox.type = "checkbox";

						const label = document.createElement("label");
						label.textContent = item.text;

						li.appendChild(checkbox);
						li.appendChild(label);
						checklist.appendChild(li);
					}

					noteContent.appendChild(checklist);

					break;
				case "image":
					const img = document.createElement("img");
					img.src = section.data;

					noteContent.appendChild(img);

					break;
			}
		}

		// add labels

		for (const label of this.labels) {
			const labelElement = document.createElement("li");
			labelElement.textContent = label;

			noteLabels.appendChild(labelElement);
		}

		// link object to element

		this.save();

		// append note

		Note.container.appendChild(noteElement);
	}
}

export { Note };