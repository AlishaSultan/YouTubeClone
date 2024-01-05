document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".menu");
    var sidebar = document.querySelector(".toggle");

    menu.onclick = function() {
        sidebar.classList.toggle("small-sidebar");
    };
});

