const hamburIcon = document.getElementById("hambur_icon")
const hamburMenu = document.querySelector(".hambur__menu")

hamburIcon.addEventListener('click', togglemenu);

function togglemenu(){
    hamburMenu.classList.toggle('inactive');
}