
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