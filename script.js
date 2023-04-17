searchForm = document.querySelector(".body-content5");

document.querySelector(".body").onmousehover = () => {
  searchForm.classList.add("active");
};

window.onload = () => {
  fadeout();  
  fadeout2();
};
function loader() {
  document.querySelector(".loader-container").classList.add("active");
  console.log(document.querySelector(".body"))
}
function loader2(){
  document.querySelector(".load2-container").classList.add("active");
}
function fadeout() {
  setTimeout(loader, 1200);
}
function fadeout2(){
  setTimeout(loader2,2500)
}
