const button1 = document.getElementById('dark-mode-button');
button1.addEventListener('click', toggleDarkMode);
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  function changeIcon() {
    var icon = document.querySelector("#dark-mode-button i");
    if (icon.classList.contains("fa fa-moon-o")) {
      icon.classList.remove("fa fa-moon-o");
      icon.classList.add("fa fa-sun-o");
    } else {
      icon.classList.remove("fa fa-sun-o");
      icon.classList.add("fa fa-moon-o");
    }
  }
  
  // On page load, check if the user has previously enabled dark mode and set it accordingly
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }


  
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
