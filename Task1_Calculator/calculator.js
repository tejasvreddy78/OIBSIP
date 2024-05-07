let displayScreenEl = document.getElementById("displayScreen");
let buttonsArr = Array.from(document.getElementsByClassName('button'));

console.log(buttonsArr)

buttonsArr.map(eachButton => {
    eachButton.addEventListener("click", (event) => {
        switch(event.target.textContent) {
            case "clear":
                displayScreenEl.textContent = "";         
                break;
            case "=":
                try {
                    displayScreenEl.textContent = eval(displayScreenEl.textContent);
                } catch {
                    displayScreenEl.textContent = "Error";
                }
                break;
            case "del":
                if(displayScreenEl.textContent) {
                    displayScreenEl.textContent = displayScreenEl.textContent.slice(0, -1);
                }
                break;
            default:
                displayScreenEl.textContent += event.target.textContent;
        }
    });
});