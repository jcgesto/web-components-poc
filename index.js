const button = document.getElementById('apply-text')
button.addEventListener('click', (_) => {
  const newButtonText = document.getElementById('new-text').value
  const jcButton = document.getElementById('jc-button')
  jcButton.setAttribute('data-text', newButtonText)
}, false)
