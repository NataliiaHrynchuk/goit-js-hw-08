var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};
 

let feedbackObject = {
    email: '',
    message: '',
};


function onFormSubmit(event) {
    event.preventDefault();

    console.log(feedbackObject);
    refs.form.reset();
    localStorage.clear();
};

 function handleInputEmail(event) {
    event.preventDefault();
    const email = event.target.value;
    feedbackObject.email = email;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackObject));
 };

 function handleFocusEmail(event) {
    event.target.value = feedbackObject.email;
};

 function handleInputMessage(event) {
    event.preventDefault();
    const message = event.target.value;
    feedbackObject.message = message;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackObject));
 };

 function handleFocusMessage(event) {
    event.target.value = feedbackObject.message;
};

 
refs.input.addEventListener('input', throttle(handleInputEmail, 500));
refs.input.addEventListener('focus', handleFocusEmail);
refs.textarea.addEventListener('input', throttle(handleInputMessage, 500));
refs.textarea.addEventListener('focus', handleFocusMessage);
refs.form.addEventListener('submit', onFormSubmit);
