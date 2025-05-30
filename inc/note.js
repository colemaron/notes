import { Utils } from "./utils.js";

const noteContainer = document.getElementById("notes");

// get current formatted date

const formatDate = (date) => new Date(date).toLocaleString("en-US", { dateStyle: "long" });

// add element with name to parent

Element.prototype.add = function (tag, options) {
	const element = document.createElement(tag);

	if (tag === "img") {
		element.setAttribute("decoding", "async");
		element.setAttribute("loading", "lazy");
	} else if (tag === "textarea") {
		element.setAttribute("spellcheck", false);
	}

	for (const [key, value] of Object.entries(options)) {
		if (key === "class") {
			element.classList.add(value);
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
			{ type: "code", content: "console.log('Hello, world!')" },
		];
	},
	labels: ["Default"],
	folder: "Notes",
	uuid: () => Utils.random.uuid(),
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

		this.element = wrapper;

		note.dataset.created = this.created;
		note.dataset.title = this.title;
		note.dataset.uuid = this.uuid;

		// header

		const header = note.add("div", { class: "header" });

		header.add("p", { classList: "created", textContent: formatDate(this.created) });
		header.add("textarea", { class: "title", textContent: this.title });

		// content

		const content = note.add("div", { class: "content" });

		for (const section of this.content) {
			switch (section.type) {
				case "text": {
					content.add("textarea", { class: "text", textContent: section.content });

					break;
				} case "code": {
					content.add("textarea", { class: "code", textContent: section.content });

					break;
				} case "img": {
					content.add("img", { class: "img", src: section.content });

					break;
				}
			}

			const added = content.lastElementChild;
		}

		// labels

		const labels = note.add("div", { class: "labels" });

		for (const label of this.labels) {
			labels.add("li", { class: "label", textContent: label });
		}

		// info section

		const info = note.add("div", { class: "info" });

		// info.add("p", { classList: "uuid", textContent: this.uuid });
		info.add("button", { class: "delete" });
		info.add("button", { class: "edit" });

		return wrapper;
	}
}

export { Note };