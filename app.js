// Get the HTML elements
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

// Initialize the counter
let counter = 0;

// Function to update the counter display
function updateCounter() {
    counterDisplay.textContent = counter;
}


// Function to add animation
function animateCounter() {
    counterDisplay.classList.add('animate');
    setTimeout(() => {
        counterDisplay.classList.remove('animate');
    }, 200);
}

// Event listener for the increment button
incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
    animateCounter();
});

// Event listener for the reset button
resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// Initialize the counter display
updateCounter();
