
const links = document.querySelectorAll(".alternate-style");
totalLinks = links.length;


function setActiveStyle(color) {
	for (let i = 0; i < totalLinks; i++) {
		if (color === links[i].getAttribute("title")) {
			links[i].removeAttribute("disabled");
		}
		else {
			links[i].setAttribute("disabled", "true");
		}
	}

}

// body skin
const bodySkin = document.querySelectorAll(".body-skin"),
	totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
	bodySkin[i].addEventListener("change", function () {
		if (this.value === "dark") {
			document.body.className = "dark";
			changeLogoImage("dark");
		}
		else {
			document.body.className = "";
			changeLogoImage("light");
		}
	})
}

function changeLogoImage(mode) {
	const logoImage = document.querySelector(".logo img");
	if (mode === "dark") {
		logoImage.src = "/img/sigwhite.png";
	} else {
		logoImage.src = "/img/sigblack.png";
	}
}


document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
	document.querySelector(".style-switcher").classList.toggle("open");
})