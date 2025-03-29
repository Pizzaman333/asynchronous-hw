document.getElementById('startButton').addEventListener('click', () => {
    const timeInput = document.getElementById('timeInput').value;
    const message = document.getElementById('message');

    if (timeInput && timeInput > 0) {
        message.textContent = `Зачекайте ${timeInput} секунд...`;
        
        setTimeout(() => {
            message.textContent = 'Час закінчився!';
        }, timeInput * 1000);
    } else {
        message.textContent = 'Введіть коректний час.';
    }
});