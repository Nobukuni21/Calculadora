function calculate () {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var soma = num1 + num2;

    document.getElementById('result').textContent = soma;
}

function menos () {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var soma = num1 - num2;

    document.getElementById('result').textContent = soma;
}