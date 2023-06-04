var questions = document.getElementsByClassName("question");
Array.from(questions).forEach(function(question) {
  question.addEventListener("click", function() {
    var answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "none") ? "block" : "none";
  });
});
