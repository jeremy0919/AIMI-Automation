document.addEventListener("DOMContentLoaded", function () {
    // Lazy loading images when they enter the viewport
    const images = document.querySelectorAll(".lazy-image");

    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute("data-src");

                    img.setAttribute("src", src);
                    img.classList.remove("lazy-image");
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    images.forEach(lazyLoad);

    // Checkbox functionality for image selection
    const checkboxes = document.querySelectorAll(".image-checkbox");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                this.parentElement.classList.add("selected");
            } else {
                this.parentElement.classList.remove("selected");
            }
        });
    });
});
