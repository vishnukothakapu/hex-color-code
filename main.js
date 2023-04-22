const btn = document.querySelector('.btn');
const input = document.querySelector('#input');
const copyBtn = document.querySelector('#copy');

function generate() {
    let hexCode = Math.floor(Math.random() * 0xffffff).toString(16);
    return "#" + hexCode;
}
btn.addEventListener("click", () => {
    input.value = generate();
    document.body.style.backgroundColor = generate();
});
window.onload = () => {
    input.value = generate();
    document.body.style.backgroundColor = generate();
}
copyBtn.addEventListener("click", () => {
    input.select();
    document.execCommand("copy");
    alert('Copied to Clipboard');
})