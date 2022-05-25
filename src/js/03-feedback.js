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
    // console.log(event.target.value);
    
    formData[event.target.name] = event.target.value;
    
        saveData();
    
};

 function onFormSubmit(event) {
    event.preventDefault();
loadData();
    if (refs.form.elements.email.value === '' || refs.form.elements.message.value === '') {
        alert("Всі поля мають бути заповнені!");
    } else {
        console.log(formData);
    }
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
  };






