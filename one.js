const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
     
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-bars':'fa-solid fa-xmark'
}

function okk(){
  let z = document.querySelector('.xy').innerHTML

if(z === "d"){
  const element = document.getElementById("ttt");
  element.style.backgroundColor = "#ffff";
  element.style.color = "#00a6ff";

  document.querySelector('.xy').innerHTML="l"
}
  
else{
  const element = document.getElementById("ttt");
  element.style.color = "#00a6ff";
  element.style.backgroundColor = "#000";
  document.querySelector('.xy').innerHTML="d"}
}
