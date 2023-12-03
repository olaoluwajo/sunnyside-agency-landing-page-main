const menuButton = document.querySelector('#hamburger');
const menu = document.querySelector('.navbar__menu');
const menuCloseButton = document.querySelector('#body');

menuButton.addEventListener('click', showMenu )
// menuCloseButton.addEventListener('click', hideMenu )

// menuCloseButton.addEventListener('click', function()  {
//    if (menu.classList.contains('show')) {
//       menu.classList.remove('show');
//    }  
//    else if (menuButton.classList.contains('show')) {
//       menuButton.classList.remove('show');
//    }
//    });


// if (window.innerWidth <= 768) {
//    menu.classList.add('hidden');
// }


function showMenu() {
   menu.classList.toggle('show');
   menuButton.classList.toggle('show');


}

function hideMenu() {
   menu.classList.remove('show');
   menuButton.classList.remove('show');
}

// () => {
//    if (menu.classList.contains('hidden')) {
//       menu.classList.remove('hidden');
//    }
// });