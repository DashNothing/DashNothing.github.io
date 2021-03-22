// Open/close mobile nav

const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const closeMenuButton = document.getElementById("close-menu");
const navLinks = document.querySelectorAll("#nav a");

hamburger.addEventListener("click", () => {
	toggleMenu();
});

closeMenuButton.addEventListener("click", () => {
	toggleMenu();
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		closeMenu();
	});
});

const openMenu = () => {
	nav.classList.add("showing");
	document.body.classList.add("no-scroll");
};

const closeMenu = () => {
	nav.classList.remove("showing");
	document.body.classList.remove("no-scroll");
};

const toggleMenu = () => {
	if (nav.classList.contains("showing")) {
		closeMenu();
	} else {
		openMenu();
	}
};
