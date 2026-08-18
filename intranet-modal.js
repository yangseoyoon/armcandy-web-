document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.intranet-trigger');
  const modal = document.querySelector('.intranet-modal');
  if (!trigger || !modal) return;

  const noBtn = modal.querySelector('.intranet-modal-btn--no');
  const yesBtn = modal.querySelector('.intranet-modal-btn--yes');

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('is-open');
  });

  noBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

  // 인트라넷 접속 페이지에서 EXIT 시 되돌아갈 원래 페이지를 기억해둔다.
  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      sessionStorage.setItem('intranetEntryPage', location.pathname + location.search);
    });
  }
});
