
// On first Click it's NOT working but, when you click the button a second time then it's working, need to solve this issue
function runFunction() {
    var x = document.getElementById("smallNavMenue");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
