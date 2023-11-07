document.addEventListener("DOMContentLoaded", function () {
    const fallingButton = document.getElementById("falling-button");
    fallingButton.addEventListener("click", function () {
        const numImages = 10;
        const container = document.getElementById("falling-container");

        for (let i = 0; i < numImages; i++) {
            const image = document.createElement("img");
            const imageUrl = i % 2 === 0 ? "sunnies1.png" : "sunnies5.png";
            image.src = imageUrl;
            image.className = "falling-image";

            const randomX = Math.random() * (window.innerWidth - 100);
            image.style.left = randomX + "px";

            container.appendChild(image);

            image.addEventListener("animationend", function () {
                this.remove();


           });
        }

     
    });
const openRectangleButtons = document.querySelectorAll(".open-rectangle");

openRectangleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const rectangleContainer = document.getElementById(`rectangle-container-${index + 1}`);

        const rectangle = document.createElement("div");
        rectangle.className = "rectangle";
        rectangle.style.left = Math.random() * (window.innerWidth - 200) + "px";
        rectangle.style.top = Math.random() * (window.innerHeight - 100) + "px";

        const rectangleText = document.createElement("div");
        rectangleText.className = "rectangle-text";
        rectangleText.textContent = "SURE YOU NEED TO SHOP MORE?";

        const openRectangleInsideButton = document.createElement("button");
         openRectangleInsideButton.className = "button1-text";
        openRectangleInsideButton.textContent = "close";
        openRectangleInsideButton.addEventListener("click", () => {
            button.click(); 
        });

        rectangleText.appendChild(openRectangleInsideButton);
        rectangle.appendChild(rectangleText);
        rectangleContainer.appendChild(rectangle);

        rectangle.style.display = "block";
    });
});


});

