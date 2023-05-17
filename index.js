const range = document.querySelector('.padding-range');

range.addEventListener('input', () => {
  const circularText = document.querySelector('.circle-container');
  const span = document.querySelector('.range-value').innerHTML = `${range.value}px`;
  circularText.style.setProperty('--padding', `${range.value}px`);
})