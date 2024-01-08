
function changeContainerSize() {
    let help = document.getElementById("helpID");
    const middle = document.getElementById("middleID");
    if (help.classList.contains("active")) {
        console.log("We are in if")
        middle.style.height = '100%';
    }
    else {
        console.log("We in else")
        middle.style.height = '100vh';
    }
}


