const slider = document.querySelectorAll('.img');
let i = 0; 
let isclicked = false;
slider[i].style.display = 'block';
setInterval(() => {
  slider[i].style.display = 'none';
  i = (i + 1) % slider.length;
  slider[i].style.display = 'block';
}, 3000);

document.querySelector('.menu-burger').addEventListener('click', () => {
  
  if (isclicked) {
    document.querySelector('.sidenav').style.width = '0';
    return isclicked = false;
  }
  else {
    document.querySelector('.sidenav').style.width = '200px';
    return isclicked = true;
  }
});
