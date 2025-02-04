class Note {
	static allNotes = [];

	static template = document.getElementById("note-template");
	static container = document.getElementById("notes");

	constructor(title, created, labels, content) {
		this.title = title || "Untitled";
		this.created = created || new Date().toLocaleString();

		this.content = content || [];
		this.labels = labels || [];
	}

	addDOM() {
		Note.allNotes.push(this);
		
		const noteElement = Note.template.content.firstElementChild.cloneNode(true);
		const [noteTitle, noteContent, noteLabels, noteCreated] = noteElement.children;

		// add data

		noteElement.dataset.title = this.title;
		noteElement.dataset.created = this.created;

		// add single info

		noteTitle.textContent = this.title;
		noteCreated.textContent = this.created;

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
						const id = `${item.text}-${Math.random()}`;

						const li = document.createElement("li");

						const checkbox = document.createElement("input");
						checkbox.classList.add("checkbox");
						checkbox.checked = item.checked;
						checkbox.type = "checkbox";
						checkbox.id = id;

						const label = document.createElement("label");
						label.textContent = item.text;
						label.htmlFor = id;

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

		// append note

		Note.container.appendChild(noteElement);
	}
}

export { Note };