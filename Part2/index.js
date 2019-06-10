console.log("The house always wins!")

const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')

console.log(id)
console.log(color)

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset() {
    idInput.value = 'Set ID'
    colorInput.value = 'Set Color'
    
}