(function () {
  const stage = document.querySelector('.stage');
  const stageHeight = stage.offsetHeight || 1079;
  function fit() {
    const scale = window.innerWidth / 1920;
    stage.style.transform = 'scale(' + scale + ')';
    document.body.style.height = (stageHeight * scale) + 'px';
  }
  fit();
  window.addEventListener('resize', fit);
})();
