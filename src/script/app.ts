//Receber Dados
let textArea: HTMLTextAreaElement | null = document.getElementById("textAreaElementMain") as HTMLTextAreaElement;
let titleArea: HTMLInputElement | null = document.getElementById("titleForm1") as HTMLInputElement;

//Armazenar dados
let textArr: string[] = [];

//Ações
let submitButton: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;
let openSidebarBtn: HTMLButtonElement = document.getElementById("openSidebar") as HTMLButtonElement;
let closeSidebarBtn: HTMLButtonElement = document.getElementById("closeSidebar") as HTMLButtonElement;

//Exibição/Impressão
let displayArea: HTMLElement = document.getElementById("displayArea") as HTMLElement;
let desktopList: HTMLElement | null = document.getElementById("desktop1");
let sidebar: HTMLElement = document.getElementById("sidebar") as HTMLElement;
let headerButtons: HTMLElement = document.getElementById("openHeaderArea") as HTMLElement;

// Função que remove quebras de linha no início e no final e substitui múltiplos espaços por um único espaço
function limparTexto(texto: string): string {
    return texto.trim().replace(/\s+/g, ' ');
}

//Função que armazena os dados capturados nos vetores chama a função imprimirElemento() para realizar a impressão desses dados
function armazenarDados(): void {
    if (textArea) {
        let clearText = limparTexto(textArea.value);
        textArr.push(clearText);
    }
    imprimirElementos();
}

//Função que exibe ao usuário todos os elementos do vetor textArr
function imprimirElementos(): void {
    displayArea.innerHTML = "";
    if (textArr) {
        for (let i = 0; i < textArr.length; i++) {
            let imprimir: HTMLElement = document.createElement("p");
            let trashArea: HTMLElement = document.createElement("div");
            let trashIcon: HTMLElement = document.createElement("p");
            let note: HTMLElement = document.createElement("div");

            trashArea.className = "trashArea";
            note.className = "note";
            trashIcon.className = "trashIcon";
            trashIcon.innerHTML = "<i class='fa-solid fa-trash'></i>";
            imprimir.innerText = textArr[i]

            trashArea.appendChild(trashIcon);
            note.appendChild(imprimir);
            note.appendChild(trashArea);
            displayArea.appendChild(note);

            trashArea.addEventListener("click", () => removeElemento(i));
        }
    }
}

//Função que remove um elemento do textArr
function removeElemento(indexArr: number): void {
    if (textArr) {
        textArr.splice(indexArr, 1);
    }
    imprimirElementos();
}

//Função que verifica se o textArea esta vazio, se sim o botão não fica clicável
function textareaVazio(): void {
    if (submitButton && textArea) {
        submitButton.disabled = textArea.value.trim().length == 0;
    }
}


//Função para mudar o titulo dos desktops
function tituloDesktop(): void {
    if (titleArea && desktopList) {
        desktopList.innerText = titleArea.value;
        titleArea.placeholder = titleArea.value;
        titleArea.value = "";
        if (desktopList.innerText == "" && titleArea.placeholder == "") {
            desktopList.innerText = "Notas sem título";
            titleArea.placeholder = "Notas sem título";
        }
    }
}

//Função para mostrar e esconder a barra lateral
function sidebarElement(){
    if(sidebar.style.display==="none"){
        sidebar.style.display = "flex";
        headerButtons.style.display = "none";
    } else{
        sidebar.style.display = "none";
        headerButtons.style.display = "flex";
    }
}


document.addEventListener("DOMContentLoaded", function (): void {
    let maxHeight = 100;
    textareaVazio();
    if (textArea) {
        textArea.addEventListener("input", function (): void {
            textareaVazio();
            this.style.height = "auto";
            this.style.height = Math.min(this.scrollHeight, maxHeight) + 'px';
        });
    }
});

//Focar na área de criação da nota quando a página carregar
window.onload = () => {
    if (textArea) {
        textArea.focus();
    }
};


//Cria a nota quando clicado
submitButton.addEventListener("click", function (): void {
    armazenarDados();
    if (textArea) {
        textArea.value = "";
        textArea.style.height = "auto";
        textareaVazio();
    }
})

//Cria a nota quando enter é pressionado
textArea.addEventListener("keypress", function (e) {
    if (textArea) {
        if (e.key === "Enter" && textArea.value.trim().length > 0) {
            e.preventDefault();
            armazenarDados();
            if (textArea) {
                textArea.value = "";
                textArea.style.height = "auto";
                textareaVazio();
            }
        }
    }
})


//Cria o títlo da área de trabalho quando o enter é clicado
titleArea.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        tituloDesktop();
    }
})


//Abre e fecha a barra lateral quando clicado
openSidebarBtn.addEventListener("click", sidebarElement);
closeSidebarBtn.addEventListener("click", sidebarElement);