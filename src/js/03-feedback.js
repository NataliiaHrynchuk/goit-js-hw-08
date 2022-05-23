var throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('form'),
    };

    refs.form.addEventListener('submit', onFormSubmit);
    refs.form.addEventListener('input', throttle(onFormInput, 500));
    loadData();

    const formData = {};
const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(formData);
};

function loadData() {
    const feedbackObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (feedbackObject) {
        refs.form.elements.email.value = feedbackObject.email || '';
        refs.form.elements.message.value = feedbackObject.message || '';
    }
};

 function onFormInput(event) {
    event.preventDefault();
    
    formData[event.target.name] = event.target.value;

    saveData();
    // const email = refs.form.elements.email.value;
    // const message = refs.form.elements.message.value;
};

 function onFormSubmit(event) {
    event.preventDefault();
   
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};






