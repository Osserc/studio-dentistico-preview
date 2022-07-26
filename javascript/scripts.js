window.addEventListener("scroll", reveal);

reveal();

function reveal() {
    var targets = document.querySelectorAll(".target");
    for (var i = 0; i < targets.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = targets[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        targets[i].classList.add("active");
      }
    }
}