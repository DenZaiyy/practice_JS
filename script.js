// exo1
const exo1 = document.querySelector(".exo1-carre");
const style = getComputedStyle(exo1);

exo1.addEventListener("click", function () {
    alert(
        `
        ClassName : ${exo1.className}
        - Background-color : ${style.backgroundColor}
        - Color : ${style.color}
        - Height : ${style.height}
        - Width : ${style.width}
        - Font : ${style.font}
        `
    );
});

// exo2
const exo2Case = document.querySelectorAll(".exo2-carre");

exo2Case.forEach(function (carre) {
    carre.addEventListener("click", function () {
        carre.classList.toggle("exo2-active");
    });
});

// exo3
const pions = document.querySelectorAll(".pion");
const msg = document.querySelector(".msg");

const p1 = "Kevin";
const p2 = "Abdel";

const players = [
    { name: p1, pion: "X" },
    { name: p2, pion: "O" },
];

let endGame = false;

let tour = 0;
let pionUtilisé = 0;

msg.innerHTML = `Pour commencer la partie, <strong>${players[tour].name}</strong> doit cliquer sur une case`;

pions.forEach(function (pion) {
    pion.addEventListener("click", function () {
        if (endGame) return;
        if (!pion.innerHTML.length == 0) {
            //Si la case cliqué est déjà cliqué, alors on retourne un message à l'utilisateur
            msg.innerHTML = `Case déjà occupé ! <br/>C'est toujours au tour de <strong>${players[tour].name}</strong> !`;
        } else {
            //sinon on met le symbole du joueur sur la case cliqué
            pion.innerHTML = players[tour].pion;

            tour++;
            pionUtilisé++;
            tour = tour % 2;

            msg.innerHTML = `C'est au tour de <strong>${players[tour].name} (${players[tour].pion})</strong> !`;

            if (pionUtilisé === 9) {
                endGame = true;
                if (endGame) {
                    msg.innerHTML = `Vous avez terminer la partie`;
                }
            }
        }
    });
});

// exo4
const box = document.querySelector(".box-of-emoji");
let id = 0;
const maxId = 225;

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function getRandomItem() {
    return Math.floor(Math.random() * hex.length);
}

document.addEventListener("keydown", (e) => {
    let items = document.querySelectorAll(".item");
    if (e.key === "ArrowDown" && id < maxId) {
        e.preventDefault();
        let newBox = document.createElement("p");

        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomItem()];
        }

        id++;
        newBox.style.backgroundColor = hexColor;
        newBox.style.cursor = "pointer";

        newBox.setAttribute("data-id", id);
        newBox.classList.add("item");

        box.appendChild(newBox);
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        id--;
        let removeEl = items[items.length - 1];
        box.removeChild(removeEl);
    }

    items.forEach(function (item) {
        item.addEventListener("click", function () {
            item.style.backgroundColor = "black";
        });
    });
});

// exo5
const euros = document.getElementById("euros");
const francs = document.getElementById("francs");

euros.addEventListener("keyup", function () {
    francs.innerHTML =
        Math.round(euros.value * 6.55957 * 100) / 100 + " francs";
});
