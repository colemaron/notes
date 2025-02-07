const noteContainer = document.getElementById("notes");

// get current formatted date

function date() {
	return new Date().toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" });
}

// add element with name to parent

function add(parent, tag, options) {
	const element = document.createElement(tag);

	// options.text ? element.textContent = options.text : null;
	// options.class ? element.classList.add(options.class) : null;

	for (const [key, value] of Object.entries(options)) {
		if (key === "class") {
			element.classList.add(value);
		} else {
			element[key] = value;
		}
	}

	return parent.appendChild(element);
}

// note class

class Note {
	constructor(title, created, content, labels, folder, uuid) {
		this.title = title ?? "Untitled Note";
		this.created = created ?? date();
		this.content = content ?? [
			{ type: "text", content: "Empty note"},
			{ type: "image", content: `https://picsum.photos/seed/${crypto.randomUUID()}/0/0` }
		];
		this.labels = labels ?? ["Work", "Personal", "Urgent", "Ideas", "To-Do", "School", "Kinda long label thats long"];
		this.folder = folder ?? "Notes";
		this.uuid = uuid ?? crypto.randomUUID();
	}

	// insert dom note element

	insert() {
		const wrapper = add(noteContainer, "div", { class: "note-wrapper" });
		const note = add(wrapper, "div", { class: "note", });

		note.dataset.created = this.created;
		note.dataset.title = this.title;
		note.dataset.uuid = this.uuid;

		// header

		const header = add(note, "div", { class: "header" });

		add(header, "h2", { class: "title", textContent: this.title });
		add(header, "p", { class: "created", textContent: this.created });

		// content

		const content = add(note, "div", { class: "content" });

		for (const section of this.content) {
			if (section.type === "text") {
				add(content, "p", { class: "text", textContent: section.content });
			} else if (section.type === "image") {
				add(content, "img", { class: "image", src: section.content });
			}
		}

		// labels

		const labels = add(note, "div", { class: "labels" });

		for (const label of this.labels) {
			console.log(label);
			add(labels, "li", {
				class: "label",
				textContent: label });
		}

		// info section

		const info = add(note, "div", { class: "info", });

		add(info, "p", { class: "uuid", textContent: this.uuid });
		add(info, "button", { class: "delete" });
		add(info, "button", { class: "edit" });
	}
}

export { Note };