const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
