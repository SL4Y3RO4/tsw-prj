let input = document.getElementById('input');
let device_card = document.querySelectorAll(".device-card");


let arrayNames = ["superstrike", "viper", "aerox", "k65"];


for(let i = 0; i < device_card.length; i++) {
   device_card[i].id = arrayNames[i];
}


input.addEventListener("input", function() {
     for(let i = 0; i < device_card.length; i++) {
       if(input.value == "") {
         device_card[i].style.display = "none";
       } else if(input.value == arrayNames[i]) {
         device_card[i].style.display = "block";
       } else if(input.value == "!") {
         device_card[i].style.display = "block";
       }
      }
});