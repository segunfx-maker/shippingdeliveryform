document.querySelector('form')?.addEventListener('reset', () => {
  window.setTimeout(() => document.querySelector('input:not([type="hidden"])')?.focus(), 0);
});
