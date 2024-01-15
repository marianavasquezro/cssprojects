document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("animatedTitle");

    title.addEventListener("mouseenter", function () {
        title.classList.add("rotateAnimation");
    });

    title.addEventListener("mouseleave", function () {
        title.classList.remove("rotateAnimation");
    });

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            document.querySelector("header").style.backgroundColor = "rgb(40, 40, 90)";
        } else {
            document.querySelector("header").style.backgroundColor = "";
        }
    });
});

