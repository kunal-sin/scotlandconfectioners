const buttons = document.querySelectorAll(".categories button");
const products = document.querySelectorAll(".product");

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const category = button.getAttribute("data-category");

		products.forEach(product => {
			if (category === "all" || product.getAttribute("data-category") === category) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		});
	});
});