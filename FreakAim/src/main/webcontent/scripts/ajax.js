let xhttp = new XMLHttpRequest();
let desc = document.getElementById("desc");

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        desc.innerHTML = this.responseText;
    }
};
xhttp.open("GET", "patch.txt", true);
xhttp.send();