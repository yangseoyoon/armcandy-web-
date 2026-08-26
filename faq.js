(function () {
  const stage = document.querySelector('.stage');
  const crtFrame = document.querySelector('.crt-frame');
  const crtScaled = document.querySelector('.crt-scaled');
  function fit() {
    const scale = window.innerWidth / 1920;
    document.body.style.height = (2986 * scale) + 'px';
    if (crtFrame && crtScaled) {
      crtFrame.style.width = (1920 * scale) + 'px';
      crtFrame.style.height = (2986 * scale) + 'px';
      crtScaled.style.transform = 'scale(' + scale + ')';
    } else {
      stage.style.transform = 'scale(' + scale + ')';
    }
  }
  fit();
  window.addEventListener('resize', fit);
})();
