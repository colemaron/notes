const noteContainer = document.getElementById("notes");

// get current formatted date

const formatDate = date => new Date(date).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" });

// add element with name to parent

function add(parent, tag, options) {
	const element = document.createElement(tag);

	for (const [key, value] of Object.entries(options)) {
		if (key === "class") {
			element.classList.add(value);
		} else if (key === "editable") {
			element.setAttribute("contenteditable", value);
			element.setAttribute("spellcheck", !value);
		} else {
			element[key] = value;
		}
	}

	return parent.appendChild(element);
}

// note class

class Note {
	constructor(title, created, content, labels, folder, uuid) {
		this.title = title ?? "Untitled";
		this.created = created ?? Date.now();
		this.content = content ?? [
			{ type: "text", content: "Empty text block"},
			{ type: "code", content: "" },	
		];
		this.labels = labels ?? ["Work", "Personal"];
		this.folder = folder ?? "Notes";
		this.uuid = uuid ?? crypto.randomUUID();
	}

	// insert dom note element

	insert() {
		const wrapper = add(noteContainer, "div", { class: "note-wrapper" });
		const note = add(wrapper, "div", { class: "note" });

		note.dataset.created = this.created;
		note.dataset.title = this.title;
		note.dataset.uuid = this.uuid;

		// header

		const header = add(note, "div", { class: "header" });

		add(header, "h2", { class: "title", textContent: this.title, editable: true });
		add(header, "p", { classList: "created copy", textContent: formatDate(this.created) });

		// content

		const content = add(note, "div", { class: "content" });

		for (const section of this.content) {
			switch (section.type) {
				case "text": {
					add(content, "p", { class: "text", textContent: section.content, editable: true });

					break;
				} case "code": {
					add(content, "code", { class: "code", textContent: section.content, editable: true });

					break;
				}
			}
		}

		// labels

		const labels = add(note, "div", { class: "labels" });

		for (const label of this.labels) {
			add(labels, "li", { class: "label", textContent: label });
		}

		// info section

		const info = add(note, "div", { class: "info", });

		add(info, "p", { classList: "uuid copy", textContent: this.uuid });
		add(info, "button", { class: "delete" });
		add(info, "button", { class: "edit" });
	}
}

export { Note };