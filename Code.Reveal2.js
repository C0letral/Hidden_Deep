const clickText = document.querySelector("#Code2");

clickText.addEventListener (
    "click",
    () => {
        const newText = document.createElement("p");
        newText.textContent = "Code";
        newText.className = "Revealed-code2"
        clickText.insertAdjacentElement("afterend", newText);
    },
    {once: true}
);