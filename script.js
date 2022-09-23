// Seleção de elementos
const inputValue = document.querySelector("#input-form");
const btn = document.querySelector("#btn");
const image = document.querySelector("#image-qr-code");
const container = document.querySelector(".container");
let valueDefault;

// funções
// dica: o método .trim remove todos os espaços caso haja
const gerarCode = () => {
    let qrCodeValue = inputValue.value.trim();
    if (!qrCodeValue || qrCodeValue === valueDefault) return;
    valueDefault = qrCodeValue;    
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
    addClasse();  
    btn.innerText = "Gerando o QR Code...";  
    
}

const addClasse = () => {
    container.classList.add("active");   
    btn.innerHTML = "Gerar QR Code";
}

//eventos
btn.addEventListener("click", gerarCode);
image.addEventListener("load", addClasse);