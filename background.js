const images = ["dark3.jpg", "dark4.jpg", "dark5.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src =`img/${randomImage}`;

document.body.appendChild(bgImage);