(function () {
  const stage = document.querySelector('.stage');
  if (!stage) return;

  function buildGhostLayer(cls) {
    const layer = document.createElement('div');
    layer.className = 'glitch-layer ' + cls;
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = stage.innerHTML;
    layer.querySelectorAll('a, button, input, textarea, select').forEach((el) => {
      el.tabIndex = -1;
    });
    layer.querySelectorAll('video').forEach((v) => {
      v.removeAttribute('src');
      v.querySelectorAll('source').forEach((s) => s.remove());
      v.load();
    });
    return layer;
  }

  const r = buildGhostLayer('glitch-r');
  const b = buildGhostLayer('glitch-b');
  const slice = buildGhostLayer('glitch-slice');

  stage.appendChild(r);
  stage.appendChild(b);
  stage.appendChild(slice);

  function scheduleBurst() {
    setTimeout(() => {
      stage.classList.remove('is-glitching');
      // 리플로우 한 번 강제해서 같은 burst 애니메이션이 연속으로 안 씹히고 재시작되게 함
      void stage.offsetWidth;
      stage.classList.add('is-glitching');
      setTimeout(() => stage.classList.remove('is-glitching'), 340);
      scheduleBurst();
    }, 1200 + Math.random() * 2200);
  }
  scheduleBurst();
})();
