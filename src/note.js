const noteTemplate = document.getElementById("note-template");
const noteContainer = document.getElementById("notes");

class Note {
	static allNotes = [];

	constructor(title, labels, content, created) {
		this.created = created || new Date().toISOString();
		this.title = title || "Untitled";

		this.labels = labels || [];
		this.content = content || [];
	}

	addDOM() {
		const noteElement = noteTemplate.content.firstElementChild.cloneNode(true);
		const [noteTitle, noteContent, noteLabels, noteCreated] = noteElement.children;

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
						const li = document.createElement("li");

						const checkbox = document.createElement("input");
						checkbox.type = "checkbox";
						checkbox.checked = item.checked;

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

		// append note

		noteContainer.appendChild(noteElement);
	}
}

export { Note };