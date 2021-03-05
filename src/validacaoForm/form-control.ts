const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  hideErrorMessages(this);
  console.log('Enviando');
});

function hideErrorMessages(form: HTMLFormElement): void {}
