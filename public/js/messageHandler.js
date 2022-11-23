document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();

	const payload = {};

	document.querySelectorAll("input, textarea, select").forEach((elem) => {
		console.log(elem.name);
		payload[elem.name] = elem.value;
	});

	console.log(payload);

	document.querySelector("form").remove();

	showModal(document.querySelector(".modal"));
});
