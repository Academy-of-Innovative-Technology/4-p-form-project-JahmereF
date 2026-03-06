document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        alert('Form submission was successful! Welcome to GameCon 2026!');
        
        console.log('Form Submitted');
    });
});

