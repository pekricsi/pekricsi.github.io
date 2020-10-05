window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");
    header.classList.toggle("sticky", window.scrollY > 0);
    footer.classList.toggle("sticky", window.scrollY > 0);
})

function toggle() {
    let header = document.querySelector("header");
    let body = document.querySelector("body")
    header.classList.toggle("active");
    if(header.className === "active"){
        body.style.scrollBehavior = "none";
    }
}

function more(){
    let me = document.getElementById('hiddenMe');
    let btn = document.getElementById('btn');
    if(me.style.display == "block"){
        me.style.display = "none";
        btn.innerHTML = "Több";
    } else {
        me.style.display = "block"
        btn.innerHTML = "Kevesebb";
    }
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}