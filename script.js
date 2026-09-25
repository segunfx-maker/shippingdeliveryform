const form = document.querySelector('#delivery-form');
const statusBox = document.querySelector('#form-status');
const submitButton = form.querySelector('button[type="submit"]');
const submitLabel = submitButton.querySelector('span');
const deliveryDate = document.querySelector('#delivery-date');
const confirmationDate = document.querySelector('#confirmation-date');

const localToday = () => {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split('T')[0];
};

const setDateDefaults = () => {
  const today = localToday();
  deliveryDate.min = today;
  if (!confirmationDate.value) confirmationDate.value = today;
};

const showStatus = (type, message) => {
  statusBox.className = `form-status ${type}`;
  statusBox.textContent = message;
  statusBox.focus();
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusBox.className = 'form-status';

  if (!form.checkValidity()) {
    form.reportValidity();
    const firstInvalid = form.querySelector(':invalid');
    firstInvalid?.focus();
    return;
  }

  submitButton.disabled = true;
  submitLabel.textContent = 'Submitting…';

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
    if (!response.ok) throw new Error('Submission failed');

    form.reset();
    setDateDefaults();
    showStatus('success', 'Thank you — your delivery information was submitted successfully.');
  } catch (error) {
    showStatus('error', 'We could not submit the form. Check your connection and try again. Your entries are still here.');
  } finally {
    submitButton.disabled = false;
    submitLabel.textContent = 'Submit Form';
  }
});

form.addEventListener('reset', () => {
  statusBox.className = 'form-status';
  statusBox.textContent = '';
  window.setTimeout(setDateDefaults, 0);
});

setDateDefaults();
