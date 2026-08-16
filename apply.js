document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');
  const programValue = document.getElementById('programValue');
  const form = document.getElementById('applyForm');

  options.forEach((btn) => {
    btn.addEventListener('click', () => {
      options.forEach((other) => other.setAttribute('aria-checked', 'false'));
      btn.setAttribute('aria-checked', 'true');
      programValue.value = btn.dataset.value;
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!programValue.value) {
      alert('프로그램 유형을 선택해주세요.');
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    window.location.href = 'complete.html';
  });
});
