"use strict";

// ===================================================
//      	 	JS-Vertiefung – API Picsum
// ===================================================

// ===================================================
//       JS-Vertiefung – API-fetch()-Level_1_1
// ===================================================

console.log("%c JS-Vertiefung – API-fetch()-Level_1_1", "color: tomato");

// Aufgabenstellung

// Nutze die Picsum Api:
// https://picsum.photos/v2/list

// Lass dir die Liste in der Console ausgeben.

// Hinweis
// Hier kannst du dir nochmal anschauen wie der Syntax von “fetch()” ist.

// fetch('https://picsum.photos/v2/list')
// 	.then(response => response.json())
// 	.then(data => console.log(data))

// ===================================================
//       JS-Vertiefung – API-fetch()-Level_2_1
// ===================================================

console.log("%c JS-Vertiefung – API-fetch()-Level_2_1", "color: tomato");

// Aufgabenstellung
// Nutze wieder die Picsum-Api:
// https://picsum.photos/v2/list

// Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, wirst du als Nächstes für jeden Datensatz eine Kombination aus Bild und Autor in ein figure-Element wrappen und in deinem HTML ausgeben lassen.

// Die Elemente in deinem HTML sollten dann so aussehen (Prüfe dies über die DevTools)
// <figure>
// 		<img src="https://picsum.photos/id/0/5616/3744">
// 		<figcaption>Alejandro Escamilla</figcaption>
// </figure>

const fetchPicsum = () => {
	const wrapper = document.querySelector('.wrapper');

	fetch("https://picsum.photos/v2/list")
		.then((response) => {
			if (response.ok === false) {
				throw new Error("Hier ist etwas schief gelaufen");
			}
			return response.json();
		})
		.then((data) => {
			data.forEach((elem) => {
				// console.log(elem);
				const newFigure = document.createElement("figure");
				const newImage = document.createElement("img");
				const newFigcaption = document.createElement("figcaption");

				newImage.setAttribute('src', `${elem.download_url}`);
				newImage.setAttribute('alt', `${elem.author}`);
				newFigure.appendChild(newImage)

				newFigcaption.textContent = elem.author;
				newFigure.appendChild(newFigcaption)

				wrapper.appendChild(newFigure);
			});
		})
		.catch((error) => console.log(error));
};

fetchPicsum();
