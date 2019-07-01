// FAQ Accordion

// Grab elements with a class of 'question'
var q = document.getElementsByClassName("question");

// initialize i
var i;

// Add for loop to go through all q variables and addEventListener to toggle the 'active' class on each one if clicked
for (i = 0; i < q.length; i++) {
  q[i].addEventListener("click", function() {

    this.classList.toggle("active");

    // Let answer = the nextElementSibling of this (q)
    var answer = this.nextElementSibling;

    //if answer has a display style of block, switch to none, else leave it block
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}