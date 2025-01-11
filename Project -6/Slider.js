const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMNyKUyeF_a0XTnF29F3f3YgLE3Ryn7aTiw&s",
    "https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg",
    "https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg",
    "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0o70WF-m5hmMtl79I0t9ERDvbD6pWUzzFA&s"
];

let currentIndex = 0;

function updateImage() {
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

updateImage();
