function operaitor() {
    const altura = parseFloat(document.querySelector('.altura').value);
    const peso = parseFloat(document.querySelector('.peso').value);
    const userName = document.querySelector('.nome').value.trim(); 
    const result = document.querySelector('.result');


    if (!peso || !altura || altura <= 0 || !userName) {
        result.innerHTML = 'Por favor, preencha todas as informações corretamente!';
        return; 
    }

    const Imc = peso / (altura * altura);

    if (Imc < 18.5) {
        result.innerHTML = `Olá ${userName}, você está abaixo do peso. Seu IMC é ${Imc.toFixed(2)}.`;
    } else if (Imc < 24.9) {
        result.innerHTML = `Olá ${userName}, você está com o peso normal. Seu IMC é ${Imc.toFixed(2)}.`;
    } else if (Imc < 29.9) {
        result.innerHTML = `Olá ${userName}, você está com sobrepeso. Seu IMC é ${Imc.toFixed(2)}.`;
    } else if (Imc < 34.9) {
        result.innerHTML = `Olá ${userName}, você está com obesidade (grau I). Seu IMC é ${Imc.toFixed(2)}.`;
    } else if (Imc < 39.9) {
        result.innerHTML = `Olá ${userName}, você está com obesidade (grau II). Seu IMC é ${Imc.toFixed(2)}.`;
    } else {
        result.innerHTML = `Olá ${userName}, você está com obesidade grave (grau III). Seu IMC é ${Imc.toFixed(2)}.`;
    }
}
