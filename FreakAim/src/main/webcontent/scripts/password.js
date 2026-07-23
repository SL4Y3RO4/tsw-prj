let form = document.querySelector('form');
let input = document.querySelector('input[type="password"]');

let p = document.createElement('p');

function validatePassword(string) {
    return string.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/g) != null ? true : false;
}

input.addEventListener('input', function() {

if(!validatePassword(input.value)) {
   p.innerHTML = "Invalid password! Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.";
   document.body.append(p);
} else {
   p.innerHTML = "Valid password!";
   document.body.append(p);
}
});


form.addEventListener('submit', function(event) {

    
    if(!validatePassword(input.value)) {
      event.preventDefault(); // Prevent the default form submission behavior
      p.style.color = "red";
      p.innerHTML = "Invalid password! Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.";
      document.body.append(p);

    } else {
      p.style.color = "green";
      p.innerHTML = "Valid password!";
      document.body.append(p);
    }

    
});