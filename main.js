const staticBtn = document.getElementById('static-btn');
const relativeBtn = document.getElementById('relative-btn');
const absoluteBtn = document.getElementById('absolute-btn');
const fixedBtn = document.getElementById('fixed-btn');

const staticPositioning = document.querySelector('.static');
const relativePositioning = document.querySelector('.relative');
const absolutePositioning = document.querySelector('.absolute');
const fixedPositioning = document.querySelector('.fixed');

staticBtn.addEventListener('click', () => {
  staticPositioning.style.display = 'block';
  relativePositioning.style.display = 'none';
  absolutePositioning.style.display = 'none';
  fixedPositioning.style.display = 'none';
});

relativeBtn.addEventListener('click', () => {
  staticPositioning.style.display = 'none';
  relativePositioning.style.display = 'block';
  absolutePositioning.style.display = 'none';
  fixedPositioning.style.display = 'none';
});

absoluteBtn.addEventListener('click', () => {
  staticPositioning.style.display = 'none';
  relativePositioning.style.display = 'none';
  absolutePositioning.style.display = 'block';
  fixedPositioning.style.display = 'none';
});

fixedBtn.addEventListener('click', () => {
  staticPositioning.style.display = 'none';
  relativePositioning.style.display = 'none';
  absolutePositioning.style.display = 'none';
  fixedPositioning.style.display = 'block';
});