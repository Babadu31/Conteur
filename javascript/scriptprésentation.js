var overlay = document.getElementById('overlay');
overlay.style.height = window.innerHeight + 'px';
window.onresize = function() {
  overlay.style.height = window.innerHeight + 'px';
}