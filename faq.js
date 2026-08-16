(function () {
  const stage = document.querySelector('.stage');
  function fit() {
    const scale = window.innerWidth / 1920;
    stage.style.transform = 'scale(' + scale + ')';
    document.body.style.height = (2986 * scale) + 'px';
  }
  fit();
  window.addEventListener('resize', fit);
})();
