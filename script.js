const form = document.getElementById('scoreForm');
const resultElement = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const fitCount = parseInt(document.getElementById('fitCount').value);
    const partialCount = parseInt(document.getElementById('partialCount').value);
    const inconclusiveCount = parseInt(document.getElementById('inconclusiveCount').value);
    const gapCount = parseInt(document.getElementById('gapCount').value);

    const totalCount = fitCount + partialCount + inconclusiveCount + gapCount;
    const normalizedValue = fitCount + partialCount * 0.75 + inconclusiveCount * 0.25;
    const weightedScore = normalizedValue / totalCount;

    resultElement.textContent = `Weighted Score: ${weightedScore.toFixed(2)}`; // Display score with 2 decimal places
});
