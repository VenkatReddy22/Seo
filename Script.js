document.addEventListener("DOMContentLoaded", () => {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isVisible = content.style.display === "block";

            document.querySelectorAll(".accordion-content").forEach(item => {
                item.style.display = "none";
                item.previousElementSibling.setAttribute("aria-expanded", "false");
            });

            if (!isVisible) {
                content.style.display = "block";
                header.setAttribute("aria-expanded", "true");
            } else {
                header.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Slider functionality
    const slides = document.querySelector(".slides");
    const slideImages = slides.querySelectorAll("img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const totalSlides = slideImages.length;

    // Clone first and last slides for seamless loop
    const firstSlide = slideImages[0].cloneNode(true);
    const lastSlide = slideImages[totalSlides - 1].cloneNode(true);
    slides.appendChild(firstSlide);
    slides.insertBefore(lastSlide, slideImages[0]);

    let slideWidth = slideImages[0].clientWidth;
    slides.style.transform = `translateX(-${slideWidth}px)`;

    const updateSlidePosition = () => {
        slides.style.transition = `transform 0.8s ease-in-out`;
        slides.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
    };

    window.addEventListener("resize", () => {
        slideWidth = slideImages[0].clientWidth;
        slides.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
    });

    const moveToNextSlide = () => {
        currentIndex++;
        updateSlidePosition();

        if (currentIndex >= totalSlides) {
            setTimeout(() => {
                slides.style.transition = "none";
                currentIndex = 0;
                slides.style.transform = `translateX(-${slideWidth}px)`;
            }, 800);
        }
    };

    const moveToPrevSlide = () => {
        currentIndex--;
        updateSlidePosition();

        if (currentIndex < 0) {
            setTimeout(() => {
                slides.style.transition = "none";
                currentIndex = totalSlides - 1;
                slides.style.transform = `translateX(-${totalSlides * slideWidth}px)`;
            }, 800);
        }
    };

    prevButton.addEventListener("click", moveToPrevSlide);
    nextButton.addEventListener("click", moveToNextSlide);

    let autoSlideInterval = setInterval(moveToNextSlide, 3000);

    const sliderContainer = document.querySelector(".slider-container");
    sliderContainer.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
    sliderContainer.addEventListener("mouseout", () => {
        autoSlideInterval = setInterval(moveToNextSlide, 3000);
    });
});
