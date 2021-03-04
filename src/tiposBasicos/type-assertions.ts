/* eslint-disable */
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
