const menuIcon = document.getElementById('menu-icon');
const menuOptions = document.getElementById('menu-options');

menuIcon.addEventListener('click', function() {
  if (menuOptions.style.display === 'none') {
    menuOptions.style.display = 'block';
  } else {
    menuOptions.style.display = 'none';
  }
});

