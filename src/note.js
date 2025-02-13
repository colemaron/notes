const noteContainer = document.getElementById("notes");

// get current formatted date

const formatDate = date => new Date(date).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" });

// add element with name to parent

Element.prototype.add = function(tag, options) {
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

	return this.appendChild(element);
};

// note class

const inputs = {
	title: "Untitled",
	created: () => Date.now(),
	content: () => {
		return [
			{ type: "text", content: "Empty note" },
			{ type: "code", content: `console.log("Hello world!")` },
			{ type: "img", content: `https://picsum.photos/seed/${Math.random()}/1000/3000` },
		];
	},
	labels: ["Default"],
	folder: "Notes",
	uuid: () => crypto.randomUUID(),
};

class Note {
	constructor(...values) {
		for (const [input, fallback] of Object.entries(inputs)) {
			this[input] = values.shift() ?? (typeof fallback === "function" ? fallback() : fallback);
		}
	}

	// insert dom note element

	insert() {
		const wrapper = noteContainer.add("div", { class: "note-wrapper" });
		const note = wrapper.add("div", { class: "note" });

		note.dataset.created = this.created;
		note.dataset.title = this.title;
		note.dataset.uuid = this.uuid;

		// header

		const header = note.add("div", { class: "header" });

		header.add("h2", { class: "title", textContent: this.title, editable: true });
		header.add("p", { classList: "created copy", textContent: formatDate(this.created) });

		// content

		const content = note.add("div", { class: "content" });

		for (const section of this.content) {
			switch (section.type) {
				case "text": {
					content.add("p", { class: "text", textContent: section.content, editable: true });

					break;
				} case "code": {
					content.add("code", { class: "code", textContent: section.content, editable: true });

					break;
				} case "img": {
					content.add("img", { class: "img", src: section.content });

					break;
				}
			}
		}

		// labels

		const labels = note.add("div", { class: "labels" });

		for (const label of this.labels) {
			labels.add("li", { class: "label", textContent: label });
		}

		// info section

		const info = note.add("div", { class: "info" });

		info.add("p", { classList: "uuid copy", textContent: this.uuid });
		info.add("button", { class: "delete" });
		info.add("button", { class: "edit" });
	}
}

export { Note };