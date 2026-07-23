
class Sections {

  constructor(sections, borderColor) {
      this.sections = sections;
      this.borderColor = borderColor;
  }

  getSections() {
    return this.sections;
  }

  getborderColor() {
    return this.borderColor;
  }

  formatSections() {
    for (let index = 0; index < this.sections.length; index++) {
        this.sections[index].style.borderColor = this.borderColor;
    }
  }

};


let bg_btn = document.getElementById("bg-changer");
let booler = true;
let sections = document.querySelectorAll("section");
let sec = new Sections(sections, "");


bg_btn.addEventListener("click", function() {   
         if(booler) { 
           document.body.style.backgroundColor = "#00315c"; 
           sec.borderColor = "#000";        
           sec.formatSections();
           booler = false;    

         } else {
           document.body.style.backgroundColor = "#000";  
           sec.borderColor = "#fff";
           sec.formatSections();
           booler = true;     
        }        
});


