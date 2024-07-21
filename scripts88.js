// main.js

function recalculateCost() {
    let model = document.getElementById('model').value;
    let duration = document.getElementById('duration').value;
    let pricePerDay = model === 'XYZ' ? 100 : 213;
    let totalCost = duration * pricePerDay;
    document.getElementById('totalCost').innerText = `The cost to book Model ${model} for ${duration} days is $${totalCost.toFixed(2)}.`;
}

function switchModel() {
    recalculateCost();
}

function changeDuration() {
    recalculateCost();
}

document.getElementById('model').addEventListener('change', switchModel);
document.getElementById('duration').addEventListener('input', changeDuration);
document.getElementById('switchModel').addEventListener('click', switchModel);
document.getElementById('changeDuration').addEventListener('click', changeDuration);

recalculateCost();
