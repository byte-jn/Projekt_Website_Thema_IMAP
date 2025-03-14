style = document.getElementById("style")
black = true;

function switchdarklightmode() {
    if (black) {
        style.href = "stylewhite.css";
        black = false;
    }
    else {
        style.href = "styleblack.css";
        black = true;
    }
}

function gigainfo(num) {
    let button = document.getElementById(`gib${num}`);
    let ps = document.getElementsByClassName(`s${num}`);
    let isVisible = button.dataset.visible === "true";

    // Button-Text umschalten
    button.innerHTML = isVisible ? "mehr anzeigen" : "weniger anzeigen";

    // Sichtbarkeit der Elemente umschalten
    for (let i = 0; i < ps.length; i++) {
        ps[i].style.display = isVisible ? "none" : "block";  // Sichtbarkeit umschalten
    }

    // Zustand speichern
    button.dataset.visible = isVisible ? "false" : "true";
}
