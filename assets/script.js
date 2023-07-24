// fetch("slides.json")
//     .then((response) => response.json())
//     .then((slidesData) => {
document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("slides.json");
    const slidesData = await response.json();

    const banner = document.getElementById("banner");

    const slideshow = document.createElement("div");
    slideshow.id = "banner";
    slideshow.classList.add("arrow");

    slidesData.forEach((slideData, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.id = "banner";

        const img = document.createElement("img");
        img.classList.add("banner-img");
        img.src = `./assets/images/slideshow/${slideData.image}`;
        img.alt = "Banner Print-it";
        slide.appendChild(img);

        const p = document.createElement("p");
        p.innerHTML = slideData.tagLine;
        slide.appendChild(p);

        slideshow.appendChild(slide);
    });

    banner.appendChild(slideshow);

    const leftArrow = document.createElement("img");
    leftArrow.classList.add("arrow", "arrow_left");
    leftArrow.src = "./assets/images/arrow_left.png";
    leftArrow.alt = "arrow left";
    banner.appendChild(leftArrow);

    const rightArrow = document.createElement("img");
    rightArrow.classList.add("arrow", "arrow_right");
    rightArrow.src = "./assets/images/arrow_right.png";
    rightArrow.alt = "arrow right";
    banner.appendChild(rightArrow);

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots");

    for (let i = 0; i < slidesData.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot", i === 0 ? "dot_selected" : "dot");
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            currentSlideIndex = i;
            showSlide(currentSlideIndex);
        });
    }
    banner.appendChild(dotsContainer);

    let currentSlideIndex = 0;

    function showSlide(index) {
        const slides = slideshow.querySelectorAll(".slide");
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });

        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            dot.classList.toggle("dot_selected", i === index);
        });

        currentSlideIndex = index;
    }

    showSlide(currentSlideIndex);

    leftArrow.addEventListener("click", () => {
        currentSlideIndex =
            (currentSlideIndex - 1 + slidesData.length) % slidesData.length;
        showSlide(currentSlideIndex);
    });

    rightArrow.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;
        showSlide(currentSlideIndex);
    });
});
