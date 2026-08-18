// 로딩 화면에 머무는 시간(ms) 이후 접속 완료 페이지로 이동.
const LOADING_DURATION_MS = 4000;
const REDIRECT_TARGET = 'intranet-connected.html';

setTimeout(() => {
  if (REDIRECT_TARGET) {
    window.location.href = REDIRECT_TARGET;
  }
}, LOADING_DURATION_MS);
