var header = document.querySelector('header');
var prevVisible;
function toggleHeader(e) {
  requestAnimationFrame(function() {
    var visible = window.pageYOffset < header.offsetHeight;
    if (prevVisible !== visible) {
      document.body.classList.toggle('header-visible', visible);
      document.body.classList.toggle('header-hidden', !visible);
      prevVisible = visible;
    }
  });
}
window.addEventListener('scroll', toggleHeader);
toggleHeader();
