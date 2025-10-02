const imcForm = document.querySelector("#imcForm");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const resultContainer = document.querySelector("#result");
const imcResultSpan = document.querySelector("#imcResult span");
const categoryResultSpan = document.querySelector("#categoryResult span");
const backButton = document.querySelector("#backButton");


const classificationClasses = [
    'underweight',
    'normal',
    'overweight',
    'obese',
    'extremely-obese'
];


function cleanAll() {
    weightInput.value = "";
    heightInput.value = "";
    resultContainer.classList.remove(...classificationClasses);
}


function showOrHideResults() {
    imcForm.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}


function calculateImc(e) {
    e.preventDefault();

    const weight = +weightInput.value.replace(",", ".");
    const height = +heightInput.value.replace(",", ".");

    if (!weight || !height) return;

    const imc = (weight / (height * height)).toFixed(1);


    let categoryText = "";
    let categoryClass = "";


    if (imc < 18.5) {
        categoryText = "Abaixo do peso";
        categoryClass = "underweight";
    } else if (imc < 25) {
        categoryText = "Peso normal";
        categoryClass = "normal";
    } else if (imc < 30) {
        categoryText = "Sobrepeso";
        categoryClass = "overweight";
    } else if (imc < 40) {
        categoryText = "Obesidade";
        categoryClass = "obese";
    } else {
        categoryText = "Obesidade extrema";
        categoryClass = "extremely-obese";
    }

    imcResultSpan.textContent = imc;
    categoryResultSpan.textContent = categoryText;

    resultContainer.classList.remove(...classificationClasses);


    resultContainer.classList.add(categoryClass);

    showOrHideResults();
}


imcForm.addEventListener("submit", calculateImc);

imcForm.addEventListener("reset", (e) => {
    e.preventDefault();
    cleanAll();
});


backButton.addEventListener("click", () => {
    showOrHideResults();
    cleanAll();
    // resetando os dados resultados
    imcResultSpan.textContent = "";
    categoryResultSpan.textContent = "";
});