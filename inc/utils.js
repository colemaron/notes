class Utils {
	// random

	static random = {
		int: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
		float: (min, max) => Math.random() * (max - min) + min,
		bool: () => Math.random() < 0.5,

		img: () => `https://picsum.photos/seed/${Utils.random.uuid()}/0/0`,

		uuid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			const r = Math.random() * 16 | 0;
			const v = c === 'x' ? r : (r & 0x3 | 0x8);

			return v.toString(16);
		}),
	};

	// events

	static dispatch = (name, detail) => document.dispatchEvent(new CustomEvent(name, { detail }));
}

export { Utils };