 const valores = document.querySelectorAll('.num');

 let soma = 0;

valores.forEach(el => {
    const valor = el.textContent.replace(/[^\d.-]/g, "").trim();

    const numero = Number(valor);

    if (!isNaN(numero)){
        soma += numero
    }
 });

 console.log(soma)