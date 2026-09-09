import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', localRecord);
form.addEventListener('submit', formSubmit);

let formData = {
  email: '',
  message: '',
};

const data = localStorage.getItem('feedback-form-state');

if (data) {
  const getData = JSON.parse(data);

  formData.email = getData.email;
  formData.message = getData.message;

  input.value = getData.email;
  textarea.value = getData.message;
} else {
  input.value = '';
  textarea.value = '';
}

function localRecord(event) {
  const context = event.target;

  if (context.tagName === 'INPUT') {
    formData.email = context.value;
  }

  if (context.tagName === 'TEXTAREA') {
    formData.message = context.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function formSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields!');
    return;
  }
  console.log(formData);

  formData.email = '';
  formData.message = '';

  input.value = '';
  textarea.value = '';

  localStorage.removeItem('feedback-form-state');
}
