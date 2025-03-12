style = document.getElementById("style")
black = true;
lastid = -1;
lastobj = "";

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

function getbigger(obj, id) {
    if (lastid == id || lastobj == obj) {
        for (let i = id; i < id + 1; i++) {
            const element = b[i];
            element.style.width = "360px";
            element.style.height = "360px";
        }
        lastid = -1;
        lastobj = "obj";
    }
    else if (obj = "b") {
        b = document.getElementsByClassName("bbox")
        for (let i = 0; i < b.length; i++) {
            const element = b[i];
            if (i == id) {
                element.style.width = "auto";
                element.style.height = "auto";
            }
            else {
                element.style.width = "360px";
                element.style.height = "360px";
            }
        }
        lastid = id;
        lastobj = obj;
    }
}