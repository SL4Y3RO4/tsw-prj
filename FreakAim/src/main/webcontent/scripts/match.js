let imgs = document.querySelectorAll('.device-img');
let matcher_box = document.querySelector('input[type=text]');
let isEntered = false;
let pars = document.querySelectorAll('p');
let textArea = document.querySelector('textarea');

let arr = [];
let i = 0;

//keylistener
document.addEventListener("keydown", function(ev) {


    if(ev.key == "Enter") {
       arr[i] = "../images/" + matcher_box.value + ".jpg";
       imgs[i].style.backgroundImage = "url(" + arr[i] + ")";
       

       if(arr[i] == "../images/gprox2_superstrike.jpg") {
           pars[i].innerHTML = "gpro x2 superstrike | 44k dpi | 6.35x12.5cm | 60g ";
       } else if(arr[i] == "../images/steelseries_aerox_3.jpg") {
           pars[i].innerHTML = "steelseries aerox 3 | 8.5k dpi | 120.55x37.98 cm | 59g";
       } else if(arr[i] == "../images/rzer-viper8k.jpg") {
		   pars[i].innerHTML = "razer viper 8k | 8k dpi | 11.9x7.5cm | 71g";
	   } else if(arr[i] == "../images/corsair-k65-mini.jpg") {
		   pars[i].innerHTML = "corsair k65 mini | 64 keys | red switch | white";
	   }

       i++;


    }

});


if(matcher_box.value) {
    textArea.innerHTML = matcher_box.value;
    document.body.appendChild(textArea);
}






        
  
   




