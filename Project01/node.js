const quotes = [
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"Believe you can and youre halfway there.",
"Don t watch the clock; do what it does. Keep going.",
"Dream big and dare to fail.",
"Your time is limited, dont waste it living someone elses life.",
"Hard work beats talent when talent doesnt work hard.",
"The future depends on what you do today.",
"Push yourself, because no one else is going to do it for you.",
"Success usually comes to those who are too busy to be looking for it.",
"Difficult roads often lead to beautiful destinations.",
"Do something today that your future self will thank you for.",
"Opportunities dont happen, you create them.",
"Stay positive, work hard, make it happen.",
"Small steps every day lead to big results.",
"Great things never come from comfort zones.",
"Discipline is the bridge between goals and accomplishment.",
"Dont limit your challenges; challenge your limits."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
});