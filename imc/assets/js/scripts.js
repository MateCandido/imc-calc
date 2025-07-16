function meuEscopo(){
    const form = document.querySelector('.form');
    const texto = document.querySelector('.texto'); // Usar querySelector para classe
    form.addEventListener('submit', recebeForm);

    function recebeForm(evento){
        evento.preventDefault(); // Previne o envio do formulário
        
        // Obter os valores dos inputs
        const peso = Number(form.querySelector('.input-peso').value); // acesso ao valor
        const altura = Number(form.querySelector('.input-altura').value); // acesso ao valor
        
        // Calculo do IMC
        const imc = peso / (altura * altura);
        
        // Atualizar o texto com o resultado do IMC
        let texto2;
        if (imc < 18.5){
            texto2 = 'Abaixo do peso';
            texto.textContent = `Seu IMC é: ${imc.toFixed(2)}, ${texto2}`;
        } else if (imc > 18.5 && imc < 24.9){
            texto2 = 'Peso Normal';
            texto.textContent = `Seu IMC é: ${imc.toFixed(2)}, ${texto2}`;
        } else if (imc > 24.9 && imc < 29.9){
            texto2 = 'Sobrepeso';
            texto.textContent = `Seu IMC é: ${imc.toFixed(2)}, ${texto2}`;
        } else if (imc > 29.9 && imc < 34.9){
            texto2 = 'Obesidade Grau 1';
            texto.textContent = `Seu IMC é: ${imc.toFixed(2)}, ${texto2}`;
        } else if (imc > 34.9 && imc < 39.9){
            texto2 = 'Obesidade Grau 2'
            texto.textContent = `Seu IMC é: ${imc.toFixed(2)}, ${texto2}`;
        } else if (imc > 39.9){
            texto2 = 'Obesidade Grau 3'
            texto.textContent = `Seu IMC é: ${imc.toFixed(2)}, ${texto2}`;
        }else {
            alert ('Altura ou Peso Invalido')
        }
    }
}
meuEscopo();