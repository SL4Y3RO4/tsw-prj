let input = document.querySelector("input");
let options = document.querySelectorAll("option");
let select = document.querySelector("select");

select.addEventListener("change", function() {

input.value = this.value;

});