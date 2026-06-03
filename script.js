const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent = (scrollTop / height) * 100;

    progress.style.width = percent + "%";
});

const revealElements =
document.querySelectorAll(".reveal");

const imageElements =
document.querySelectorAll(".slide-left, .slide-right");

const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");
            entry.target.classList.add("show");
        }

    });

},
{
    threshold:0.2
}
);

revealElements.forEach(el =>
observer.observe(el)
);

imageElements.forEach(el =>
observer.observe(el)
);
