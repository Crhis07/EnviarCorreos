document.addEventListener("DOMContentLoaded", () => {
    console.log("El archivo JavaScript se ha cargado correctamente.");

    const sections = document.querySelectorAll("section");

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                console.log(`Sección visible: ${entry.target.id}`);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
