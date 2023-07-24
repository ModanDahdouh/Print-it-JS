const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }

    const allSlides = document.querySelectorAll(".slide");
    allSlides.forEach((slide) => {
        slide.style.display = "none";
    });

    const currentSlideElement =
        document.querySelectorAll(".slide")[currentSlide];
    currentSlideElement.style.display = "flex";

    // Mettez à jour la sélection des points
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

showSlide(currentSlide);

arrow_left.addEventListener("click", () => {
    currentSlide--;
    showSlide(currentSlide);
});

arrow_right.addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});
