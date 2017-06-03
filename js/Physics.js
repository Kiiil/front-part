
let buttonMenuOpen = document.getElementsByClassName('button_menu')[0];
let buttonMenuClouse = document.getElementsByClassName('clouse_menu')[0]

//Открытие мобильного меню
buttonMenuOpen.addEventListener('click', function(){

    let menu = document.getElementsByClassName('active_button_menu')[0];

    menu.style.display = 'block';

}, true);
buttonMenuClouse.addEventListener('click', function(){

    let menu = document.getElementsByClassName('active_button_menu')[0];

    menu.style.display = 'none';

}, true)
