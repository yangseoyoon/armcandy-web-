(function () {
  const stage = document.querySelector('.stage');
  if (!stage) return;

  // .crt-frame(실제 렌더 크기) > .crt-scaled(1920px 좌표계, scale.js가 스케일) > .stage
  const frame = document.createElement('div');
  frame.className = 'crt-frame';

  const scaled = document.createElement('div');
  scaled.className = 'crt-scaled';

  stage.parentNode.insertBefore(frame, stage);
  frame.appendChild(scaled);
  scaled.appendChild(stage);

  // R/G/B 색수차 레이어: 실제 콘텐츠를 그대로 복제해 겹치되, pointer-events:none이라
  // 클릭/호버는 전부 원본 .stage로 그대로 통과한다.
  const rgb = document.createElement('div');
  rgb.className = 'crt-rgb';
  ['crt-r', 'crt-g', 'crt-b'].forEach((cls) => {
    const layer = document.createElement('div');
    layer.className = 'crt-layer ' + cls;
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = stage.innerHTML;
    // 복제된 <video>는 재생할 필요 없는 장식용이라, 실제 영상을 또 내려받아
    // 디코딩하지 않도록 src를 떼어낸다(안 그러면 진짜 영상까지 4배로 로드됨).
    layer.querySelectorAll('video').forEach((v) => {
      v.removeAttribute('src');
      v.querySelectorAll('source').forEach((s) => s.remove());
      v.load();
    });
    rgb.appendChild(layer);
  });
  scaled.appendChild(rgb);

  ['crt-scanlines', 'crt-glow', 'crt-vignette', 'crt-noise'].forEach((cls) => {
    const el = document.createElement('div');
    el.className = cls;
    el.setAttribute('aria-hidden', 'true');
    frame.appendChild(el);
  });

  frame.classList.add('on');
})();
