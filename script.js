// mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', function(){
  const nav = document.querySelector('#main-nav ul');
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

// set year in footer
document.getElementById('year').textContent = new Date().getFullYear();
