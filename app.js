// Get all question elements
var questions = document.getElementsByClassName("question");

// Add click event listener to each question
Array.from(questions).forEach(function(question) {
  question.addEventListener("click", function() {
    // Toggle the display of the associated answer
    var answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "none") ? "block" : "none";
  });
});
