const noteContainer = document.getElementById("notes");

// get current formatted date

function date() {
	return new Date().toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" });
}

// add element with name to parent

function add(parent, tag, options) {
	const element = document.createElement(tag);

	options.text ? element.textContent = options.text : null;
	options.class ? element.classList.add(options.class) : null;

	return parent.appendChild(element);
}

// note class

class Note {
	constructor(title, created, content, labels, folder) {
		this.title = title || "Untitled Note";
		this.created = created || date();
		this.content = content || [];
		this.labels = labels || [];

		this.folder = folder || "Notes";
		this.uuid = crypto.randomUUID();
	}

	// insert dom note element

	insert() {
		const note = add(noteContainer, "div", { class: "note", });

		add(note, "h2", { class: "title", text: this.title });

		// content



		// labels

		const labels = add(note, "div", { class: "labels" });

		for (const label of this.labels) {
			add(labels, "li", { class: "label", text: label });
		}

		// info section

		const info = add(note, "div", { class: "info", });

		add(info, "p", { class: "created", text: this.created });
		add(info, "button", { class: "delete" });
		add(info, "button", { class: "edit" });
	}
}

export { Note };