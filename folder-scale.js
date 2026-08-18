(function () {
  const stage = document.querySelector('.stage');
  const stageWidth = stage.offsetWidth || 1920;
  const stageHeight = stage.offsetHeight || 1080;
  function fit() {
    const scale = Math.min(window.innerWidth / stageWidth, window.innerHeight / stageHeight);
    stage.style.transform = 'scale(' + scale + ')';
  }
  fit();
  window.addEventListener('resize', fit);
})();
