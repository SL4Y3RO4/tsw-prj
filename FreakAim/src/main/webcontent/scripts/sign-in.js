let submit = document.getElementById('submit');
let inputz = document.querySelector('input');
let x;
let y;


function adminAccess() {
      if(inputz.value == "admin") {
          window.open("admin.html");
      }
}

adminAccess();


//if a user doesnt insert nothing on textfield, the submit button change position when user come button
submit.addEventListener("mouseover", function() {

    x = Math.floor(Math.random() * innerWidth / 2);
    y = Math.floor(Math.random() * innerHeight / 2);

    if(inputz.value == "") { 
       submit.style.left = x + "px";
       submit.style.top = y + "px";


       document.body.append("nope ");
    }
      
});


