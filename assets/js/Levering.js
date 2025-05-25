const redIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  {
    name: "Enghave Kaffe",
    coords: [55.6669, 12.5476],
    address: "Enghave Plads 3\n1670 København V",
    phone: "23 83 49 91",
    time: "Torsdag 15:00 - 18:00",
    text: "Hent din Torsdagskasse hos Vesterbros hyggeligste kaffebar. ",
    image: "assets/img/Enghave Kaffe.png",
  },
  {
    name: "Nørrebro Kolonial",
    coords: [55.6925, 12.544],
    address: "Jægersborggade 25 2200 Kbh. N",
    phone: "20 91 08 00",
    time: "Torsdag 16:00 - 19:00",
    text: "Byens bedste kolonialbutik med egenimport af økologisk og biodynamisk mad og vin.",
    image: "assets/img/kolonial.png",
  },
  {
    name: "Rosforth & Rosforth",
    coords: [55.6743, 12.5877],
    address: "Knippelsbrogade 10 1409 København K",
    phone: "33 32 55 20",
    time: "Torsdag 14:00 - 17:30",
    text: "Danmarks ukronede øko, bio og naturvins konger. Noma's tidligere Sommelier. ",
    image: "assets/img/rosforth.png",
  },
  {
    name: "Rødder & Vin",
    coords: [55.6882, 12.5618],
    address: "Ravnsborggade 8 2200 København N",
    phone: "27 20 27 84",
    time: "Torsdag 15:00 - 18:00",
    text: "Nørrebros lokale naturvinsbutik med et stort udvalg af egenimporterede vine nøje udvalgt af legendariske Solfinn. ",
    image: "assets/img/roodogvin.jpg",
  },
  {
    name: "Grønttorvet Valby",
    coords: [55.6561, 12.5017],
    address: "Belle de Boskoopvej 20 2500 Valby",
    phone: "23 72 31 26",
    time: "Torsdag 15:00 - 18:00",
    text: "Privat initiativ. Kasserne står i forhaven. ",
    image: "assets/img/Valby_1.jpg",
  },
  {
    name: "Grønttorvet Valby",
    coords: [55.6561, 12.5017],
    address: "Belle de Boskoopvej 20 2500 Valby",
    phone: "23 72 31 26",
    time: "Torsdag 15:00 - 18:00",
    text: "Privat initiativ. Kasserne står i forhaven. ",
    image: "assets/img/Valby_1.jpg",
  },
  {
    name: "Grønttorvet Valby",
    coords: [55.6561, 12.5017],
    address: "Belle de Boskoopvej 20 2500 Valby",
    phone: "23 72 31 26",
    time: "Torsdag 15:00 - 18:00",
    text: "Privat initiativ. Kasserne står i forhaven. ",
    image: "assets/img/Valby_1.jpg",
  },
  {
    name: "Grønttorvet Valby",
    coords: [55.6561, 12.5017],
    address: "Belle de Boskoopvej 20 2500 Valby",
    phone: "23 72 31 26",
    time: "Torsdag 15:00 - 18:00",
    text: "Privat initiativ. Kasserne står i forhaven. ",
    image: "assets/img/Valby_1.jpg",
  },
  {
    name: "Grønttorvet Valby",
    coords: [55.6561, 12.5017],
    address: "Belle de Boskoopvej 20 2500 Valby",
    phone: "23 72 31 26",
    time: "Torsdag 15:00 - 18:00",
    text: "Privat initiativ. Kasserne står i forhaven. ",
    image: "assets/img/Valby_1.jpg",
  },
  {
    name: "Grønttorvet Valby",
    coords: [55.6561, 12.5017],
    address: "Belle de Boskoopvej 20 2500 Valby",
    phone: "23 72 31 26",
    time: "Torsdag 15:00 - 18:00",
    text: "Privat initiativ. Kasserne står i forhaven. ",
    image: "assets/img/Valby_1.jpg",
  },
];

const map = L.map("kort").setView([55.675, 12.565], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap",
}).addTo(map);

const infoBox = document.getElementById("infoBox");
const accordionContainer = document.getElementById("accordionContainer");

function updateInfoBox(location) {
  infoBox.classList.add("fade");
  setTimeout(() => {
    infoBox.innerHTML = `
          <img src="${location.image}" alt="${location.name}">
          <h3>${location.name}</h3>
          <p><strong>Adresse:</strong><br>${location.address.replace(
            "\n",
            "<br>"
          )}</p>
          <p><strong>Telefon:</strong> ${location.phone}</p>
          <p><strong>Åbningstid:</strong> ${location.time}</p>
          <p>${location.text}</p>
        `;
    infoBox.classList.remove("fade");
  }, 200);
}

locations.forEach((loc, index) => {
  const marker = L.marker(loc.coords, { icon: redIcon }).addTo(map);
  marker.on("click", () => updateInfoBox(loc));

  const button = document.createElement("button");
  button.className = "accordion-button";
  button.textContent = loc.name;
  button.addEventListener("click", () => updateInfoBox(loc));

  accordionContainer.appendChild(button);

  if (index === 0) {
    setTimeout(() => button.click(), 0);
  }
});
