const clickArea = document.getElementById('clickable-area');
const textcontainer = document.getElementById('text-container');

clickArea.addEventListener('click', function() {

if (textcontainer.innerHTML === "") {
    const newText = document.createElement('p');

    newText.textContent = "Code";
    newText.className = "spawned-text";

    textcontainer.appendChild(newText);
}    

});