var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function loadMainPage()
{
  window.location.href = "main_page.html"
}

function loadLoginPage()
{
  window.open("./login_page.html",'_top')
}

function openNav() {
  if(window.innerWidth >= 500)
  {
    document.getElementById("mySidenav").style.width = "300px";
  }
  else {
    document.getElementById("mySidenav").style.width = "100%";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}