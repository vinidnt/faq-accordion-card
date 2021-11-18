document.querySelectorAll(".collapsible").forEach(function (coll) {

    coll.addEventListener("click", function () {
        let image = coll.firstElementChild;

        image.classList.toggle("arrow-up")
        coll.classList.toggle("active");

        var content = coll.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
            content.style.orverflow = "visible"
        }
    })
});