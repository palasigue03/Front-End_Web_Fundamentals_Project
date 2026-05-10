document.getElementById("toggler").addEventListener("click", open_close);

var menuState = 0 // close
function open_close() {
    if (menuState === 0) {
        menuState = 1;
        document.getElementById("myNav").style.height = "100%";
    } else {
        menuState = 0;
        document.getElementById("myNav").style.height = "0%";
    }
    console.log(menuState);
}

