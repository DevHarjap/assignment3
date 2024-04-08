// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submit = document.querySelector('#submit-button');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const main = document.querySelector('#contact-page');
    main.classList.add('ThankYou'); 
    main.innerHTML = 'Thank you for your message';
})

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

