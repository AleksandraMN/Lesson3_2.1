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
let timeout;

const getText = () => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    pElement.textContent = input.value;
  }, 300);
};

input.addEventListener('input', getText);

