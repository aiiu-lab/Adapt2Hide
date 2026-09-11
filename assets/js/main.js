/* All interactions use local assets; there is no client-side framework or CDN. */
(() => {
  'use strict';

  const dialog = document.querySelector('#image-dialog');
  const dialogImage = document.querySelector('#dialog-image');
  const closeDialog = document.querySelector('#close-dialog');

  document.querySelectorAll('[data-zoom]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialogImage.src = link.href;
      dialogImage.alt = link.querySelector('img').alt;
      dialog.showModal();
    });
  });
  closeDialog.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  const copyButton = document.querySelector('#copy-citation');
  const copyStatus = document.querySelector('#copy-status');
  let copyTimeout;
  copyButton.addEventListener('click', async () => {
    clearTimeout(copyTimeout);
    const citation = document.querySelector('#bibtex');
    try {
      await navigator.clipboard.writeText(citation.textContent);
      copyStatus.textContent = 'BibTeX copied to clipboard.';
      copyButton.querySelector('span').textContent = 'Copied!';
    } catch {
      // Selection also works when previewing with file:// or without clipboard permission.
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selected = window.getSelection();
      selected.removeAllRanges();
      selected.addRange(range);
      copyStatus.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy, or use Download citation.';
    }
    copyTimeout = setTimeout(() => {
      copyButton.querySelector('span').textContent = 'Copy BibTeX';
    }, 2500);
  });
})();
