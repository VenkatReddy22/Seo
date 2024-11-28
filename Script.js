document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isVisible = content.style.display === "block";

            // Close all other accordion items
            document.querySelectorAll(".accordion-content").forEach((item) => {
                item.style.display = "none";
            });

            // Toggle the current accordion item
            content.style.display = isVisible ? "none" : "block";
        });
    });


        const slides = document.querySelectorAll("#slider .slides img");
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");
        let currentIndex = 0;
    
        // Function to show the active slide
        const showSlide = (index) => {
            // Reset all slides to be hidden
            slides.forEach((slide) => {
                slide.style.display = 'none'; // Hide all images initially
            });
            
            // Show the current slide
            slides[index].style.display = 'block'; // Display the current slide
        };
    
        // Show the first slide when the page loads
        showSlide(currentIndex);
    
        // Event listener for the "previous" button
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1; // Loop to the last slide if at the first
            showSlide(currentIndex); // To show the previous slide
        });
    
        // Event listener for the "next" button
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1; // Loop to the first slide if at the last
            showSlide(currentIndex); // To show the next slide
        });
    
        // Auto slide functionality with a delay of 3 seconds
        setInterval(() => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1; // Loop back to first slide
            showSlide(currentIndex); // Automatically moves to next slide
        }, 3000);
});
    
