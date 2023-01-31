const menu = document.querySelector('.menu');
const menuToggle  = document.querySelector('.menu-toggle');

menuToggle.addEventListener("click", () =>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
});