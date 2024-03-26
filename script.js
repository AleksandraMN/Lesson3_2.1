'use strict';

const body = document.querySelector('body');

const divElement = document.createElement('div');
divElement.classList.add('vh-100', 'w-100', 'd-flex',
    'align-items-center', 'justify-content-center', 'flex-column');
body.append(divElement);

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.classList.add('mb-3');
divElement.append(input);

const pElement = document.createElement('p');
divElement.append(pElement);


function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
};

const getText = () => {
  pElement.textContent = input.value;
};

const getTextLast = debounce(getText, 300);

input.addEventListener('input', getTextLast);

