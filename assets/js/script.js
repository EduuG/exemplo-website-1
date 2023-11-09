// Exibir e fechar menu hamburger
function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
}



// Exemplo 1
const showTelNumber = document.querySelectorAll(".show-tel-number");
const telNumber = document.createElement("h4");
telNumber.classList.add("tel-number")
telNumber.innerText = "(99) 99999-9999";

showTelNumber.forEach(item => {
    item.addEventListener("click", () => {
        const info = item.parentNode;
        item.style.display = "none";
        info.appendChild(telNumber.cloneNode(true)); 
    });
});

telNumber.addEventListener("click", () => {
    const info = telNumber.parentNode;
    telNumber.style.display = "none";
    showTelNumber.style.display = "block";
})



// Exemplo 2
const inputCPF = document.querySelector(".inputCPF");
const inputTelNumber = document.querySelector(".inputTelNumber");
const inputTextArea = document.querySelector(".textArea");
const sendMessage = document.querySelector(".sendMessage");

sendMessage.addEventListener("click", () => {
    if (!inputCPF.value || !inputTelNumber.value || !inputTextArea.value) {
        alert("Preencha todos os campos!");
    } else {
        inputCPF.value = "";
        inputTelNumber.value = "";
        inputTextArea.value = "";
        alert("Mensagem enviada com sucesso!");
    }
})



// Exemplo 3
const result = document.querySelector("#result");
const buttonShowResult = document.querySelector(".show-result");

buttonShowResult.addEventListener("click", () => {
    const numberA = document.querySelector("#numberA").value;
    const numberB = document.querySelector("#numberB").value;
    const numberC = document.querySelector("#numberC").value;
    
    if (!numberA || !numberB || !numberC) {
        alert("Preencha todos os campos!");
    } else {
        result.value = ((numberC * numberB) / numberA).toFixed(2);
    }
});



// Exemplo 4
const buttonOpenModal = document.querySelector(".open-modal");
const buttonCloseModal = document.querySelector(".close-modal");
const modalBackground = document.querySelector(".modal-background");
const modal = document.querySelector(".modal")

buttonOpenModal.addEventListener("click", () => {
    modal.showModal();
    modalBackground.style.display = "block";
});

buttonCloseModal.addEventListener("click", () => {
    modal.close();
    modalBackground.style.display = "none";
});

function handleEsc(e) {
    if (e.key === "Escape") {
        modal.close();
        modalBackground.style.display = "none";
    }
}

document.addEventListener("keydown", handleEsc);