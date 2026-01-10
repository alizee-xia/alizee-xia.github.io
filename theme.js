function toggleTheme(){
  const body = document.body;
  const btn = document.getElementById('themeBtn');
  if(body.classList.contains('light')){
    body.classList.remove('light');
    body.classList.add('dark');
    btn.innerText = '☀️';
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    btn.innerText = '🌙';
  }
}
