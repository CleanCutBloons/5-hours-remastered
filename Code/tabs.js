var tab = function(id) {
    document.getElementById("main-content-area").style.display = "none";
    document.getElementById("ach-content-area").style.display = "none";
    document.getElementById("lore-content-area").style.display = "none";
    document.getElementById("upd-content-area").style.display = "none";
    switch(id) {
        case "main":
            document.getElementById("main-content-area").style.display = "";
            break
        case "achievements":
            document.getElementById("ach-content-area").style.display = "";
            break
        case "lore":
            document.getElementById("lore-content-area").style.display = "";
            break
        case "update":
            document.getElementById("upd-content-area").style.display = "";
            break
    }
}

window.onload = function() {
    tab("main")
}