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