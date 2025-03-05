// Interactive ANN Visualization 1
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const activation = document.getElementById('activation');
const output1 = document.getElementById('output1');
const input1Value = document.getElementById('input1-value');
const input2Value = document.getElementById('input2-value');

input1.addEventListener('input', updateOutput1);
input2.addEventListener('input', updateOutput1);
activation.addEventListener('change', updateOutput1);

function updateOutput1() {
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);
  const selectedActivation = activation.value;

  // Weighted sum (example weights: 0.6 and 0.4)
  const weightedSum = (value1 * 0.6) + (value2 * 0.4);

  // Apply activation function
  let result;
  switch (selectedActivation) {
    case 'relu':
      result = Math.max(0, weightedSum); // ReLU
      break;
    case 'sigmoid':
      result = 1 / (1 + Math.exp(-weightedSum)); // Sigmoid
      break;
    case 'tanh':
      result = Math.tanh(weightedSum); // Tanh
      break;
    default:
      result = weightedSum;
  }

  // Display output
  output1.textContent = result.toFixed(2);
  input1Value.textContent = value1.toFixed(2);
  input2Value.textContent = value2.toFixed(2);
}

// Interactive ANN Visualization 2
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const hiddenOutput = document.getElementById('hidden-output');
const output2 = document.getElementById('output2');
const input3Value = document.getElementById('input3-value');
const input4Value = document.getElementById('input4-value');

input3.addEventListener('input', updateOutput2);
input4.addEventListener('input', updateOutput2);

function updateOutput2() {
  const value3 = parseFloat(input3.value);
  const value4 = parseFloat(input4.value);

  // Hidden layer calculation (example weights: 0.5 and 0.5)
  const hiddenLayer = (value3 * 0.5) + (value4 * 0.5);

  // Final output (example weight: 0.7)
  const finalOutput = hiddenLayer * 0.7;

  // Display outputs
  hiddenOutput.textContent = hiddenLayer.toFixed(2);
  output2.textContent = finalOutput.toFixed(2);
  input3Value.textContent = value3.toFixed(2);
  input4Value.textContent = value4.toFixed(2);
}

// Quiz Logic
const questions = [
  { question: "What is the role of an activation function in an ANN?", answer: "B" },
  { question: "Which of the following is a real-world application of ANNs?", answer: "C" },
  { question: "What is backpropagation used for in ANNs?", answer: "B" }
];

function checkAnswer(index) {
  const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
  const feedback = document.getElementById(`feedback${index}`);
  if (selected && selected.value === questions[index].answer) {
    feedback.innerHTML = "😊 Correct!";
  } else {
    feedback.innerHTML = "😢 Incorrect!";
  }
}

// Initialize outputs
updateOutput1();
updateOutput2();