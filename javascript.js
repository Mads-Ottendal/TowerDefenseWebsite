
function changeContainerSize() {
    let help = document.getElementById("helpId");
    const middle = document.getElementById("middleId");
    if (help.classList.contains("active")) {
        console.log("We are in if")
        document.querySelector('.middle');
        middle.style.height = '100%';
    }
    else {
        console.log("We in else")
        middle.style.height = '100vh';
    }
}


