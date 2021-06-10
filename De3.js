var isCalledOne = true;
function myFunction(x) {
  x.classList.toggle("change");
  // document.getElementsByClassName("sidenav")[0].style.height = "500px";
  
  if(isCalledOne){
    document.getElementsByClassName("sidenav")[0].style.height = "400px";
    isCalledOne=false;
  }
  else{
    document.getElementsByClassName("sidenav")[0].style.height = "0px";
    isCalledOne=true;
  }
  
}